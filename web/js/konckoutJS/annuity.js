var annuityListPolicyKTK = {//后台map对象属性与前台KO对象属性的映射关系
		"POLICYHLDR_NAME" : "policyName",//投保人
		"INSU_NAME" : "insureName",//被保人
};

var annuityPolicyKTK = {// 后台map对象属性与前台KO对象属性的映射关系
	"MAIN_CVRG_NAME" : "mainRiskName",// 主险名称
};

var AnnuityListModel = function(){
	var self = this;
	self.policyList = [];
	self.list = ['Jan', 'Feb', 'Mar', 'etc'];
	self.categories = [{ name: 'Fruit', items: ['Apple', 'Orange', 'Banana'] },
                       { name: 'Vegetables', items: ['Celery', 'Corn', 'Spinach'] }
                      ];
	self.name = "textValue";
	self.html = "<span> this is a span </span>";	
	self.displayMessage = true;
	self.detailsEnabled = false;
	
	self.userName = "";
	self.userPassword = "";
	self.availableCountries =['France', 'Germany', 'Spain'];
	self.selectedCountry = "" ;
	self.countryName = "";
	self.countryPopulation ="" ;
	self.availableCountriesList = [{ countryName : "USA" ,"countryPopulation": "320000000"}, { countryName : "Sweden" ,"countryPopulation": "29000000"}  ];
	
	
	self.getAnnuityListListInfo = function(){
		var data = [{"POLICYHLDR_NAME": "陈劲峰","INSU_NAME": "钱广信",},{"POLICYHLDR_NAME": "陈劲峰","INSU_NAME": "生无领零一",}];
		var array = MTMDtoArray(annuityListPolicyKTK, data);
		annuityListModel.policyList(array);
	};	
    self.addPerson = function () {
        self.policyList.push({ policyName: "陈劲峰" + new Date() ,"insureName": "钱广信"+ new Date()});
    };

    self.removePerson = function () {
        self.policyList.remove(this);
    };
    
    self.enableDetails = function () {
    	 this.detailsEnabled(true);      
    };
    
    self.disableDetails = function () {
    	 this.detailsEnabled(false);   
    };
    
    self.chosenCountries = function () {
    	alert(this.selectedCountry());
   };


};


var AnnuityInfoVerifyModel = function() {
	var self = this;
	self.mainRiskName = ""; // 主险名称

	
	self.getAnnuityVerifyInfo = function() {
		var data = {"MAIN_CVRG_NAME":"优享人生年金保险（分红型）"};
		MTMDtoObj(annuityInfoVerifyModel, annuityPolicyKTK, data);
	};
};

var annuityListModel = new AnnuityListModel();
var annuityInfoVerifyModel = new AnnuityInfoVerifyModel();

$(document).ready(function(){
	bindViewModel([{
	    name : "annuityListModel",
	    model: annuityListModel
	}, 
	{
		name : "annuityInfoVerifyModel",
		model : annuityInfoVerifyModel
	}]);
	
	annuityListModel.getAnnuityListListInfo();
	annuityInfoVerifyModel.getAnnuityVerifyInfo();
	
	var jsonData = ko.toJSON(annuityListModel);
	var plainJs = ko.toJS(annuityListModel);
	console.log(jsonData,plainJs);
}); 
