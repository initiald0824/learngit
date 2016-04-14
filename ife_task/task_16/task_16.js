/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


function trim(str){ //删除左右两端的空格
　　return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = trim (document.getElementById("aqi-city-input").value);
	var aqi = trim(document.getElementById("aqi-value-input").value);

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
	    alert("城市名必须为中英文字符！")
	    return;
    }
    if(!aqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }

	aqiData [city] = aqi;
	console.log(aqiData);

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var content = document.getElementById("aqi-table");
	content.innerHTML =  "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

	for (var city in aqiData){
	content.innerHTML +="<tr><td>"+city
	+"</td><td>"+aqiData[city]
	+"</td><td><button onclick=\"delBtnHandle(\'"+ city +"\')\">删除</button></td></tr>";
    }

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  
    delete aqiData[city];
    console.log("delete");
    renderAqiList();
}

function init() {

}


