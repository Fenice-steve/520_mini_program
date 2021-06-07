// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"请输入.......",
    inputOneWord:"我",
    inputTwoWord:"爱",
    inputThreeWord:"你",
    inputOneNum:"5",
    inputTwoNum:"2",
    inputThreeNum:"0",
    one_text:"",
    two_text:"",
    three_text:"",
    one_num_text:"",
    two_num_text:"",
    three_num_text:"",

    // 是否第一次载入
    isFirstLoad:false
  },

  // 生成文字
  btnCreate:function(){


    if (this.data.inputOneWord!="" && this.data.inputTwoWord!="" &&  this.data.inputThreeWord!="" &&  this.data.inputOneNum!="" &&  this.data.inputTwoNum!="" &&  this.data.inputThreeNum!="") {
      this.setData({
        title: 
        this.createLine1(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n" +
        this.createLine2(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
        this.createLine3(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
        this.createLine4(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
        this.createLine5(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum),
      })
    }else{
      wx.showToast({
        title: '请输入文字',
        icon:'error'
      })
    }
  
    // if(isFirstLoad == true){
    //   this.setData({


        
    //     title: 
    //     this.createLine1(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n" +
    //     this.createLine2(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
    //     this.createLine3(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
    //     this.createLine4(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
    //     this.createLine5(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum),
        
    //     isFirstLoad:false
    //   })
    // }else if(isFirstLoad == false){
    //   if(this.data.one_text!="" && this.data.two_text!="" && this.data.three_text!="" && this.data.one_num_text!="" && this.data.two_num_text!="" && this.data.three_num_text!=""){
    //     this.setData({
    //       title: 
    //       this.createLine1(this.data.one_text, this.data.two_text, this.data.three_text,this.data.one_num_text,this.data.two_num_text,this.data.three_num_text) + "\n" +
    //       this.createLine2(this.data.one_text, this.data.two_text, this.data.three_text,this.data.one_num_text,this.data.two_num_text,this.data.three_num_text) + "\n"+
    //       this.createLine3(this.data.one_text, this.data.two_text, this.data.three_text,this.data.one_num_text,this.data.two_num_text,this.data.three_num_text) + "\n"+
    //       this.createLine4(this.data.one_text, this.data.two_text, this.data.three_text,this.data.one_num_text,this.data.two_num_text,this.data.three_num_text) + "\n"+
    //       this.createLine5(this.data.one_text, this.data.two_text, this.data.three_text,this.data.one_num_text,this.data.two_num_text,this.data.three_num_text)
    //     })
    //   }else{
    //     wx.showToast({
    //       title: '请输入文字',
    //       icon:'error'
    //     })
    //   }
    // }

   
    
    
  },

  // 分享好友
  btnShare:function(res){
      if(res.form == "button"){
        console.log(res.target, res)
      }
      return{
        title:"520来表白",
        path:"pages/home/home"
      }
  },

  // 获得第一个输入框的值
  getOneinput:function(e){
      this.setData({
        one_text : e.detail.value,
        inputOneWord: e.detail.value
      })
  },


  // 获得第二个输入框的值
  getTwoinput:function(e){
    this.setData({
      two_text : e.detail.value,
      inputTwoWord: e.detail.value
    })
    
  },

  // 获得第三个输入框的值
  getThreeinput:function(e){
    this.setData({
      three_text : e.detail.value,
      inputThreeWord: e.detail.value
    })
  },

  // 获得第一个数字输入框的值
  getNumOneinput:function(e){
    this.setData({
      one_num_text : e.detail.value,
      inputOneNum: e.detail.value
    })
},


// 获得第二个数字输入框的值
getNumTwoinput:function(e){
  this.setData({
    two_num_text : e.detail.value ,
    inputTwoNum:  e.detail.value
  })
  
},

// 获得第三个数字输入框的值
getNumThreeinput:function(e){
  this.setData({
    three_num_text : e.detail.value,
    inputThreeNum:e.detail.value
  })
},

// 清除文字
btnClearWord:function(){
  this.setData({
    title:"",
    inputOneWord:"",
    inputTwoWord:"",
    inputThreeWord:""
  })
},

// 清除数字
btnClearNum:function(e){
  this.setData({
    title:"",
    inputOneNum:"",
    inputTwoNum:"",
    inputThreeNum:""
  })
},


  // 打印第一行
  createLine1:function(str0, str1, str2, num0, num1, num2) {
      var x
      var y
      var z
      var space1=" "
      var space2="  "
      var space3="   "
      var margrin="  "
      switch(num0){
        case "0":
          x = str0+str0+str0+str0
          break;
        case "1":
          x = space1+str0+space2
          break;
        case "2":
          x = str0+str0+str0+str0
          break;
        case "3":
          x = str0+str0+str0+str0
          break;
        case "4":
          x = str0+space1+str0+space1
          break;
        case "5":
          x = str0+str0+str0+str0
          break;
        case "6":
          x = str0+str0+str0+str0
          break; 
        case "7":
          x = str0+str0+str0+str0
          break; 
        case "8":
          x = str0+str0+str0+str0
          break; 
        case "9":
          x = str0+str0+str0+str0
          break;  
      }
      switch(num1){
        case "0":
          y = space1+str1+str1+str1+str1
          break;
        case "1":
          y = space2+str1+space2
          break;
        case "2":
          y = space1+str1+str1+str1+str1
          break;
        case "3":
          y = space1+str1+str1+str1+str1
          break;
        case "4":
          y = space1+str1+space1+str1+space1
          break;
        case "5":
          y = space1+str1+str1+str1+str1
          break;
        case "6":
          y = space1+str1+str1+str1+str1
          break; 
        case "7":
          y = space1+str1+str1+str1+str1
          break; 
        case "8":
          y = space1+str1+str1+str1+str1
          break; 
        case "9":
          y = space1+str1+str1+str1+str1
          break;
      }
      switch(num2){
        case "0":
          z = space1+str2+str2+str2+str2
          break;
        case "1":
          z = space2+str2+space2
          break;
        case "2":
          z = space1+str2+str2+str2+str2
          break;
        case "3":
          z = space1+str2+str2+str2+str2
          break;
        case "4":
          z = space1+str2+space1+str2+space1
          break;
        case "5":
          z = space1+str2+str2+str2+str2
          break;
        case "6":
          z = space1+str2+str2+str2+str2
          break; 
        case "7":
          z = space1+str2+str2+str2+str2
          break; 
        case "8":
          z = space1+str2+str2+str2+str2
          break; 
        case "9":
          z = space1+str2+str2+str2+str2
          break;
      }
      var firstLine = x + y + z
      return firstLine
  },

  // 打印第2行
  createLine2:function(str0, str1, str2, num0, num1, num2) {
    var x
    var y
    var z
    var space1=" "
      var space2="  "
      var space3="   "
      var margrin="  "
    switch(num0){
      case "0":
        x = str0+space2+str0+space1
        break;
      case "1":
        x = space1+str0+space2
        break;
      case "2":
        x = space3+str0
        break;
      case "3":
        x = space3+str0
        break;
      case "4":
        x = str0+space1+str0+space1
        break;
      case "5":
        x = str0+space3
        break;
      case "6":
        x = str0+space3
        break; 
      case "7":
        x = space3+str0
        break; 
      case "8":
        x = str0+space2+str0
        break; 
      case "9":
        x = str0+space2+str0
        break;  
    }
    switch(num1){
      case "0":
        y = space1+str1+space2+str1+space1
        break;
      case "1":
        y = space2+str1+space2
        break;
      case "2":
        y = space1+space3+str1
        break;
      case "3":
        y = space1+space3+str1
        break;
      case "4":
        y = space1+str1+space1+str1+space1
        break;
      case "5":
        y = space1+str1+space3
        break;
      case "6":
        y = space1+str1+space3
        break; 
      case "7":
        y = space1+space3+str1
        break; 
      case "8":
        y = space1+str1+space2+str1
        break; 
      case "9":
        y = space1+str1+space2+str1
        break;
    }
    switch(num2){
      case "0":
        z = space1+str2+space2+str2+space1
        break;
      case "1":
        z = space2+str2+space2
        break;
      case "2":
        z = space1+space3+str2
        break;
      case "3":
        z = space1+space3+str2
        break;
      case "4":
        z = space1+str2+space1+str2+space1
        break;
      case "5":
        z = space1+str2+space3
        break;
      case "6":
        z = space1+str2+space3
        break; 
      case "7":
        z = space1+space3+str2
        break; 
      case "8":
        z = space1+str2+space2+str2
        break; 
      case "9":
        z = space1+str2+space2+str2
        break;
    }
    var firstLine = x + y + z
    return firstLine
},

 // 打印第3行
 createLine3:function(str0, str1, str2, num0, num1, num2) {
  var x
  var y
  var z
  var space1=" "
  var space2="  "
  var space3="   "
  var margrin="  "
  switch(num0){
    case "0":
      x = str0+space2+str0+space1
      break;
    case "1":
      x = space1+str0+space2
      break;
    case "2":
      x = str0+str0+str0+str0
      break;
    case "3":
      x = str0+str0+str0+str0
      break;
    case "4":
      x = str0+str0+str0+str0
      break;
    case "5":
      x = str0+str0+str0+str0
      break;
    case "6":
      x = str0+str0+str0+str0
      break; 
    case "7":
      x = space3+str0
      break; 
    case "8":
      x = str0+str0+str0+str0
      break; 
    case "9":
      x = str0+str0+str0+str0
      break;  
  }
  switch(num1){
    case "0":
      y = space1+str1+space2+str1+space1
      break;
    case "1":
      y = space2+str1+space2
      break;
    case "2":
      y = space1+str1+str1+str1+str1
      break;
    case "3":
      y = space1+str1+str1+str1+str1
      break;
    case "4":
      y = space1+str1+str1+str1+str1
      break;
    case "5":
      y = space1+str1+str1+str1+str1
      break;
    case "6":
      y = space1+str1+str1+str1+str1
      break; 
    case "7":
      y = space1+space3+str1
      break; 
    case "8":
      y = space1+str1+str1+str1+str1
      break; 
    case "9":
      y = space1+str1+str1+str1+str1
      break;
  }
  switch(num2){
    case "0":
      z = space1+str2+space2+str2+space1
      break;
    case "1":
      z = space2+str2+space2
      break;
    case "2":
      z = space1+str2+str2+str2+str2
      break;
    case "3":
      z = space1+str2+str2+str2+str2
      break;
    case "4":
      z = space1+str2+str2+str2+str2
      break;
    case "5":
      z = space1+str2+str2+str2+str2
      break;
    case "6":
      z = space1+str2+str2+str2+str2
      break; 
    case "7":
      z = space1+space3+str2
      break; 
    case "8":
      z = space1+str2+str2+str2+str2
      break; 
    case "9":
      z = space1+str2+str2+str2+str2
      break;
  }
  var firstLine = x + y + z
  return firstLine
},

 // 打印第4行
 createLine4:function(str0, str1, str2, num0, num1, num2) {
  var x
  var y
  var z
  var space1=" "
      var space2="  "
      var space3="   "
      var margrin="  "
  switch(num0){
    case "0":
      x = str0+space2+str0+space1
      break;
    case "1":
      x = space1+str0+space2
      break;
    case "2":
      x = str0+space3
      break;
    case "3":
      x = space3+str0
      break;
    case "4":
      x = space2+str0+space1
      break;
    case "5":
      x = space3+str0
      break;
    case "6":
      x = str0+space2+str0
      break; 
    case "7":
      x = space3+str0
      break; 
    case "8":
      x = str0+space2+str0
      break; 
    case "9":
      x = space3+str0
      break;  
  }
  switch(num1){
    case "0":
      y = space1+str1+space2+str1+space1
      break;
    case "1":
      y = space2+str1+space2
      break;
    case "2":
      y = space1+str1+space3
      break;
    case "3":
      y = space1+space3+str1
      break;
    case "4":
      y = space1+space2+str1+space1
      break;
    case "5":
      y = space1+space3+str1
      break;
    case "6":
      y = space1+str1+space2+str1
      break; 
    case "7":
      y = space1+space3+str1
      break; 
    case "8":
      y = space1+str1+space2+str1
      break; 
    case "9":
      y = space1+space3+str1
      break;
  }
  switch(num2){
    case "0":
      z = space1+str2+space2+str2+space1
      break;
    case "1":
      z = space2+str2+space2
      break;
    case "2":
      z = space1+str2+space3
      break;
    case "3":
      z = space1+space3+str2
      break;
    case "4":
      z = space1+space2+str2+space1
      break;
    case "5":
      z = space1+space3+str2
      break;
    case "6":
      z = space1+str2+space2+str2
      break; 
    case "7":
      z = space1+space3+str2
      break; 
    case "8":
      z = space1+str2+space2+str2
      break; 
    case "9":
      z = space1+space3+str2
      break;
  }
  var firstLine = x + y + z
  return firstLine
},

 // 打印第5行
 createLine5:function(str0, str1, str2, num0, num1, num2) {
  var x
  var y
  var z
  var space1=" "
  var space2="  "
  var space3="   "
  var margrin="  "
  switch(num0){
    case "0":
      x = str0+str0+str0+str0
      break;
    case "1":
      x = space1+str0+space2
      break;
    case "2":
      x = str0+str0+str0+str0
      break;
    case "3":
      x = str0+str0+str0+str0
      break;
    case "4":
      x = space2+str0+space1
      break;
    case "5":
      x = str0+str0+str0+str0
      break;
    case "6":
      x = str0+str0+str0+str0
      break; 
    case "7":
      x = space3+str0
      break; 
    case "8":
      x = str0+str0+str0+str0
      break; 
    case "9":
      x = str0+str0+str0+str0
      break;  
  }
  switch(num1){
    case "0":
      y = space1+str1+str1+str1+str1
      break;
    case "1":
      y = space2+str1+space2
      break;
    case "2":
      y = space1+str1+str1+str1+str1
      break;
    case "3":
      y = space1+str1+str1+str1+str1
      break;
    case "4":
      y = space1+space2+str1+space1
      break;
    case "5":
      y = space1+str1+str1+str1+str1
      break;
    case "6":
      y = space1+str1+str1+str1+str1
      break; 
    case "7":
      y = space1+space3+str1
      break; 
    case "8":
      y = space1+str1+str1+str1+str1
      break; 
    case "9":
      y = space1+str1+str1+str1+str1
      break;
  }
  switch(num2){
    case "0":
      z = space1+str2+str2+str2+str2
      break;
    case "1":
      z = space2+str2+space2
      break;
    case "2":
      z = space1+str2+str2+str2+str2
      break;
    case "3":
      z = space1+str2+str2+str2+str2
      break;
    case "4":
      z = space1+space2+str2+space1
      break;
    case "5":
      z = space1+str2+str2+str2+str2
      break;
    case "6":
      z = space1+str2+str2+str2+str2
      break; 
    case "7":
      z = space1+space3+str2
      break; 
    case "8":
      z = space1+str2+str2+str2+str2
      break; 
    case "9":
      z = space1+str2+str2+str2+str2
      break;
  }
  var firstLine = x + y + z
  return firstLine
},

  // 复制生成的文字
  btnCopy:function(){
      wx.setClipboardData({
        data: this.data.title,
        success(res){
          wx.getClipboardData({
            success: (res) =>{
              wx.showToast({
                title: '复制成功',
              })
            },
          })
        }
      })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: 
      this.createLine1(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n" +
      this.createLine2(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
      this.createLine3(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
      this.createLine4(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum) + "\n"+
      this.createLine5(this.data.inputOneWord, this.data.inputTwoWord, this.data.inputThreeWord,this.data.inputOneNum,this.data.inputTwoNum,this.data.inputThreeNum),

      isFirstLoad:true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})