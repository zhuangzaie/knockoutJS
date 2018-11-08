<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
	
<html>
<head>
<style type="text/css">
 	p {margin-left: 20px}
	.graybg {
		background: #eeeeee;
		color: #d3d2d2;
		cursor: not-allowed;
	}
	.bottoms {
	  margin-top: 20px;
	  margin-right: 30px;
	  margin-bottom: 100px;
	  margin-left: 20px;
  }
</style>

</head>
<body>


<div  data-model="annuityListModel">
	text value 绑定：
	<p data-bind="text: name"></p> 
	html 绑定：
	<div data-bind="html: html"></div> 
	
	<p  data-bind="css: { 'graybg' : annuityListModel.policyList().length > 0 }">CSS类名绑定</p>
	<div data-bind="style: { color: annuityListModel.policyList().length > 0 ? 'red' : 'black' }">  Style属性绑定</div>
	<p>foreach：列表展示：</p>
	<ul  data-bind="foreach:policyList">
		<li>
			<ul >
				<li>下标：<k data-bind="text:$index"></k>投保人：<k data-bind="text:policyName"></k> </li>
				<li>被保人：<k data-bind="text:insureName"></k></li>
				<li>被保人：<k data-bind="text:$data.insureName"></k></li>
				<li>使用$parent来使用foreach元素之外的属性：<b data-bind="text: $parent.name"></b> </li>
				<li>click binding 事件-----<a href="#" data-bind="click: $parent.removePerson">动态删除遍历节点</a> </li>
			
			</ul>
		</li>
	</ul>

	<p>动态增加遍历节点<a href="#" data-bind="click: annuityListModel.addPerson"> Add</a> </p>
	
	<p>输出数组中的所有元素</p>
	<ul data-bind="foreach:list"> 
	     <li> 
	          <b data-bind="text: $data"></b> 
	     </li> 
	 </ul>
使用"as"为foreach中的元素定义别名	 
<ul data-bind="foreach: { data: categories, as: 'category' }"> 
     <li> 
         <ul data-bind="foreach: { data: items, as: 'item' }"> 
             <li> 
                 <span data-bind="text: category.name"></span>: 
                 <span data-bind="text: item"></span> 
             </li> 
         </ul> 
     </li> 
 </ul> 
 
 在没有绑定属性的情况下使用foreach
 
  <ul> 
     <li class="header">Header item</li> 
     <!-- ko foreach: list --> 
         <li>Item <span data-bind="text: $data"></span></li> 
     <!-- /ko --> 
 </ul> 
	
	visible：条件隐藏展示：
	<div  data-bind="visible: annuityListModel.policyList().length > 0">
			满足条件才显示,不满足则隐藏。这里是根据list长度进行判断。
			<p> html绑定：</p>	
			<div data-bind="html: html"></div> 
	</div>
	<p>checked binding</p>
	 <label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label> 
	   
	  <p>if binding </p>
 	<div data-bind="if: displayMessage">Here is a message. Astonishing.</div>
	<p>event binding</p>
	<div>    
		<div data-bind="event: { mouseover: enableDetails, mouseout: disableDetails }">        
		Mouse over me    
		</div>   
		<div data-bind="visible: detailsEnabled">        Details    </div>
	 </div>								
	
	value 绑定 
	<p>Login name: <input data-bind="value: userName"/></p>
	<p>Password: <input type="password" data-bind="value: userPassword"/></p>
	
	<p data-bind="text: userName">Login name:</p> 	<p data-bind="text: userPassword">Password: </p> 
	
	<p>options binding: <select data-bind="options: availableCountries, optionsCaption: 'Choose...'"></select></p>

	<p>options binding: 
	<select data-bind="options: annuityListModel.availableCountriesList, 
	　optionsText: 'countryName', optionsValue:'countryPopulation',value: annuityListModel.selectedCountry,
		event: { change: chosenCountries }"></select></p>
	<div data-bind="visible: selectedCountry"> 
	<!-- Appears when you select something -->    You have chosen a country with population    
	<span data-bind="text: selectedCountry ? selectedCountry : 'unknown'"></span>.
	</div>

	
</div>




<div class = "bottoms" style="color:green;"  data-model="annuityInfoVerifyModel">
	<p><k data-bind="text:mainRiskName"></k></p>
</div>


<script src="/js/common/jquery-1.9.1.min.js" type=""></script>
<script src="/js/common/knockout-3.2.0.js" type=""></script>
<script src="/js/common/jquery.livequery.js" type=""></script>
<script src="/js/common/knockout.multimodels-0.1.min.js" type=""></script>
<script src="/js/common/common.js" type=""></script>
<script src="/js/konckoutJS/annuity.js" type=""></script>
</body>

</html>