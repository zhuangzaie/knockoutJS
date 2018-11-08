function isArray(object) {
	return object && typeof object === 'object' && Array == object.constructor;
}



function bindViewModel(options) {
	var _options = arguments;
	if (!ko.attach)
		ko.applyBindings(new initBindings());
	else
		initBindings();
	function initBindings() {
		var self = this;
		if (isArray(options)) {
			for ( var k in options) {
				var m = options[k];
				var name = m["name"];
				var model = m["model"];
				var validation = m["vali"];
				self[name] = bindModel(name, model, validation);
			}
		} else if (_options.length > 1) {
			self[_options[0]] = bindModel(_options[0], _options[1], _options[2]);
		}
		//增加IE9　placeholder
		if(!('placeholder' in document.createElement('input'))){
			$('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			});
		};
	}
	;
	function bindModel(name, model, validation) {
		for ( var k in model) {
			if ('function' == typeof model[k])
				continue;
			if (!isArray(model[k])) {
				if (validation && validation[k]) {
					model[k] = ko.observable(model[k]).extend(validation[k]);
				} else {
					model[k] = ko.observable(model[k]);
				}
			} else {
				if (validation && validation[k]) {
					model[k] = ko.observableArray(model[k]).extend(
							validation[k]);
				} else {
					model[k] = ko.observableArray(model[k]);
				}
			}
		}
		if (ko.attach)
			ko.attach(name, model);
		return model;
	}
};



/** 后台Map对象转换成前台KO对象
 * model：要转换成的KO对象；ktk：属性映射关系的map；data：查询出的数据对象 */
function MTMDtoObj(model,ktk,data){
	for(var k in data){
		var modelKey = ktk[k];
		if(!modelKey){
			continue;
		}
		if(data[k]){
			model[modelKey](data[k]);
		}else{
			model[modelKey]("");
		}
	}
};
/** 后台Map对象列表转换成前台KO对象列表 */
function MTMDtoArray(ktk,data){
	var model = [];
	for(var k in data){
		var item = {};
		var obj=data[k];
		for(var i in ktk){
			var modelKey = ktk[i];
			var modelValue=i;
			if(obj[modelValue]){
				item[modelKey] = obj[modelValue];
			}else{
				item[modelKey]="";
			}
		}
		model.push(item);
	}
	return model;
}