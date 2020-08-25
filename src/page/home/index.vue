<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-08-03 15:49:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-13 17:37:16
-->
<template>
  <div>
    <my-header></my-header>
    <my-banner></my-banner>
    <div class="bannerBtoBox">
      <div class="box">
        <img src=""
             alt="">
        <div>
          <h4>首页首页</h4>
          <p><span>首页首页首页首页</span></p>
        </div>
      </div>
      <div class="box">
        <img src=""
             alt="">
        <div>
          <h4>首页首页</h4>
          <p><span>首页首页首页首页</span></p>
        </div>

      </div>
      <div class="box">
        <img src=""
             alt="">
        <div>
          <h4>首页首页</h4>
          <p><span>首页首页首页首页</span></p>
        </div>
      </div>
      <div class="box">
        <img src=""
             alt="">
        <div>
          <h4>首页首页</h4>
          <p><span>首页首页首页首页</span></p>
        </div>
      </div>
    </div>
    <div class="contentBg">
      <h2>培训课程介绍</h2>
      <p><span>以学员为中心，提供一站式人力资源培训和综合服务的专业培训学校</span></p>
      <div class="courseBox">
        <div class="left">
          <div class="header">
            <h3>培训课程介绍</h3>
            <p><span>提供人力资源全系列专业课程，帮助人力资源从业者提升职业能力，实现人力资源管理价值！</span></p>
          </div>
          <div v-for="(item,index) in courseItem"
               :key="index"
               class="courseItem"
               :class="{courseBg:courseKey==index}"
               @click="selectFirst(index)">
            <div>
              <span>{{item.courseName}}</span>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="contentLoveBg">
      <div class="title">
        <h3>最新开班</h3>
        <p><span>以学员为中心，提供一站式人力资源培训和综合服务的专业培训学校</span></p>
        <h4>最近开班课程</h4>
      </div>
      <div class="boxs">
        <div class="box">
          <img src="../../assets/home/class-01.png"
               alt="">
          <div>
            <h3>20170506浦东周六班第114期《助理人力资源</h3>
            <p><span>人力资源岗位证书课程是从基础的人力资源管理实务操作入手，提升学员人事实务操作能力。</span></p>
            <p><span>2020-07-31</span></p>
          </div>
        </div>
        <div class="box">
          <img src="../../assets/home/class-02.png"
               alt="">
          <div>
            <h3>20170506浦东周六班第114期《助理人力资源</h3>
            <p><span>三才培训徐汇分部5月7日周日8：00时，教务管理人员准备开班各项资料，迎接即将开班的第...</span></p>
            <p><span>2020-07-31</span></p>
          </div>
        </div>
        <div class="box">
          <img src="../../assets/home/class-03.png"
               alt="">
          <div>
            <h3>20170507徐汇周日班第239期《人力资源岗位证</h3>
            <p><span>《人力资源岗位证书》课程是从基础的人力资源管理实务操作入手，提升学员人事实务操作能力。</span></p>
            <p><span>2020-07-31</span></p>
          </div>
        </div>
        <div class="box">
          <img src="../../assets/home/class-04.png"
               alt="">
          <div>
            <h3>220170506杨浦周六第24期《高级行政管理师》</h3>
            <p><span>《人力资源岗位证书》课程是从基础的人力资源管理实务操作入手，提升学员人事实务操作能力。</span></p>
            <p><span>2020-07-31</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="contentGrayFirst">
      <div class="title">
        <h3>企业内训-提供转型新动力</h3>
        <p><span>以学员为中心，提供一站式人力资源培训和综合服务的专业培训学校</span></p>
        <div class="navCompany">
          <span v-for="(item,index) in companys"
                :key="index"
                :class="{borderBot:borderBotKey==index}"
                @click="selectSecond(index)">{{item}}</span>
        </div>
      </div>
      <div class="boxs">
        <div class="box"
             v-for="(item,index) in companyInfo"
             :key="index"
             v-show="companyWhich==index">
          <div class="boxLeft">
            <h4>{{item.companyName}}</h4>
            <p><span>{{item.info}}</span></p>
            <button><span>查看详情</span></button>
          </div>
          <div class="boxRight">
            <img :src="item.url"
                 alt="">
          </div>
        </div>
        <div class="drop">
          <i v-for="(item,index) in drop"
             :key="item"
             :class="{dropBg:dropBgKey==index}"
             @click="selectSecond(index)">
          </i>
        </div>
      </div>
    </div>
    <div class="contentWhite">
      <div class="title">
        <h3>资讯动态</h3>
        <p><span>以学员为中心，提供一站式人力资源培训和综合服务的专业培训学校</span></p>
      </div>
      <div class="boxs">
        <div class="box">
          <div class="top">
            <i></i>
            <p>
              <span>考试资讯</span>
            </p>
          </div>
          <div class="bot"></div>
        </div>
        <div class="box">
          <div class="top">
            <i></i>
            <p>
              <span>考试资讯</span>
            </p>
          </div>
          <div class="bot"></div>
        </div>
        <div class="box">
          <div class="top">
            <i></i>
            <p>
              <span>考试资讯</span>
            </p>
          </div>
          <div class="bot"></div>
        </div>
      </div>
    </div>
    <div class="contentGraySecond">
      <div class="titlte">
        <h3>精品教材</h3>
        <p>
          <span>以学员为中心，提供一站式人力资源培训和综合服务的专业培训学校</span>
        </p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from '../../components/header'
import myBanner from '../../components/banner'
import myFooter from '../../components/footer'
export default {
  data() {
    return {
      index: 0,
      courseKey: 0,
      dropBgKey: 0,
      borderBotKey: 0,
      companyWhich: 0,
      // 课程模块选择
      courseItem: [
        { courseName: '推荐课程' },
        { courseName: '岗位证书' },
        { courseName: '职业资格' },
        { courseName: '政府补贴' },
        { courseName: '职称证书' },
        { courseName: '学历证书' },
        { courseName: '总监班' },
      ],
      // 公司模块选择
      companys: [
        '康师傅',
        '广电通信',
        '国际信托',
        '赶集网',
        '立邦涂料',
        '宝山教育局',
        '杨浦人保局',
        '强生医疗',
        '上海机场',
        '益平网络',
      ],
      // 公司标题，信息，图片
      companyInfo: [
        {
          companyName: '康师傅',
          info:
            '梳理汽车用户的完整体验（售前、售中、售后），按照客户旅程理论明确各触点的用户期望。基于用户期待，对品牌下属各门店的用户服务表现进行评价。包括服务标准执行率、满意度、nps。同时，平台与门店客服无缝对接，一旦发现客户抱怨，能第一时间处理。',
          url: require('../../assets/home/company-01.png'),
        },
        {
          companyName: '广电通信',
          info: '1',
          url: require('../../assets/home/company-01.png'),
        },
      ],
      // 圆点
      drop: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    }
  },
  components: {
    myHeader,
    myBanner,
    myFooter,
  },
  methods: {
    // 课程导航选择
    selectFirst(index) {
      this.courseKey = index
    },
    // 公司导航选择
    selectSecond(index) {
      this.dropBgKey = index
      this.companyWhich = index
      this.borderBotKey = index
    },
  },
}
</script>
<style lang="less" scoped>
.bannerBtoBox {
  top: 492px;
  width: 1200px;
  height: 110px;
  display: flex;
  position: absolute;
  padding: 0 63px 0 63px;
  margin: 0 360px 0 360px;
  background-color: #ffffff;
  justify-content: space-between;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  .box {
    display: flex;
    align-self: center;
    img {
      width: 56px;
      height: 56px;
      border: 1px solid #000000;
    }
    div {
      text-align: left;
      margin-left: 19px;
      align-self: center;
      h4 {
        font-size: 16px;
        color: #333333;
        margin-bottom: 7px;
      }
      p {
        span {
          width: 100%;
          font-size: 14px;
          color: #999999;
        }
      }
    }
  }
}
.contentBg {
  width: 100%;
  height: 900px;
  padding: 98px 360px 0 360px;
  background-size: contain !important;
  background: url('../../assets/home/contentBg.png') no-repeat #f7f8fa;
  h2 {
    font-size: 32px;
    color: #313d53;
    font-weight: bold;
  }
  p {
    margin-top: 16px;
    span {
      width: 100%;
      font-size: 16px;
      color: #999999;
    }
  }
  .courseBox {
    width: 100%;
    height: 600px;
    margin-top: 42px;
    border: 1px solid #999999;
    .left {
      width: 306px;
      height: 100%;
      text-align: left;
      background-color: #3482f1;
      .header {
        padding: 51px 34px 0 34px;
        h3 {
          font-size: 28px;
          color: #ffffff;
          font-weight: bold;
        }
        p {
          margin: 18px 0 20px 0;
          span {
            width: 100%;
            display: block;
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
      .courseItem {
        width: 100%;
        height: 54px;
        display: flex;
        cursor: pointer;
        div {
          width: 100%;
          height: 54px;
          display: flex;
          margin: 0 34px 0 34px;
          border-bottom: 1px solid #94bdf6;
          span {
            display: block;
            font-size: 16px;
            color: #ffffff;
            margin-left: 10px;
            align-self: center;
          }
        }
      }
      .courseBg {
        background-color: #61a3ff;
      }
    }
  }
}
.contentLoveBg {
  width: 100%;
  height: 638px;
  background-color: #ffffff;
  padding: 52px 360px 0 360px;
  background-size: contain !important;
  background: url('../../assets/home/loveBg.png') no-repeat 295px 20px,
    url('../../assets/home/loveBg.png') no-repeat 979px -40px;
  .title {
    width: 100%;
    text-align: left;
    h3 {
      color: 313d53;
      font-size: 32px;
      font-weight: bold;
    }
    p {
      margin-top: 16px;
      span {
        font-size: 16px;
        color: #999999;
      }
    }
    h4 {
      font-size: 20px;
      margin-top: 52px;
      color: #313d53;
    }
  }
  .boxs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-between;
    .box {
      width: 590px;
      height: 130px;
      margin-bottom: 30px;
      display: inline-flex;
      img {
        width: 220px;
        height: auto;
      }
      div {
        text-align: left;
        margin-left: 20px;
        padding-top: 5px;
        h3 {
          font-size: 16px;
          color: #333333;
          font-weight: bold;
          margin-bottom: 13px;
        }
        p {
          span {
            font-size: 14px;
            color: #999999;
          }
        }
        p:last-child {
          margin-top: 18px;
        }
      }
    }
  }
}
.contentGrayFirst {
  width: 100%;
  height: 800px;
  background-color: #f7f8fa;
  padding: 52px 417px 0 417px;
  .title {
    h3 {
      font-size: 32px;
      color: #313d53;
      font-weight: bold;
    }
    p {
      margin-top: 16px;
      span {
        font-size: 16px;
        color: #999999;
      }
    }
    .navCompany {
      width: 100%;
      display: flex;
      margin-top: 60px;
      padding: 0 40px 0 40px;
      justify-content: space-between;
      span {
        display: block;
        cursor: pointer;
        font-size: 18px;
        color: #333333;
        padding-bottom: 5px;
      }
      .borderBot {
        border-bottom: 3px solid #2672ff;
      }
    }
  }
  .boxs {
    .box {
      display: flex;
      margin-top: 60px;
      .boxLeft {
        width: 560px;
        height: 390px;
        // z-index: 9999999;
        text-align: left;
        position: absolute;
        padding: 42px 46px 0 46px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        h4 {
          font-size: 28px;
          color: #999999;
          margin-bottom: 34px;
        }
        p {
          span {
            font-size: 16px;
            color: #313d53;
          }
        }
        button {
          bottom: 50px;
          width: 110px;
          height: 34px;
          border: none;
          cursor: pointer;
          margin-top: 42px;
          position: absolute;
          background-color: #2672ff;
          span {
            font-size: 15px;
            color: #ffffff;
          }
        }
      }
      .boxRight {
        margin-left: 408px;
        padding-top: 65px;
        img {
          width: auto;
          height: 374px;
          //   max-width: 100%;
        }
      }
    }
  }
  .drop {
    height: 6px;
    width: 150px;
    display: flex;
    margin-left: 24px;
    justify-content: space-between;
    i {
      width: 6px;
      height: 6px;
      display: block;
      cursor: pointer;
      border-radius: 50%;
      background-color: #dde5ed;
    }
    .dropBg {
      background-color: #2c76ff;
    }
  }
}
.contentWhite {
  width: 100%;
  height: 816px;
  padding: 54px 436px 0 436px;
  .title {
    h3 {
      font-size: 32px;
      color: #313d53;
      font-weight: bold;
    }
    p {
      margin-top: 16px;
      span {
        font-size: 16px;
        color: #999999;
      }
    }
  }
  .boxs {
    width: 100%;
    display: flex;
    margin-top: 82px;
    .box {
      width: 350px;
      height: 490px;
      display: block;
      .top {
        width: 100%;
        height: 168px;
        padding-top: 40px;
        background-color: #f6f6f6;
        border: 1px solid rgba(227, 227, 227, 1);
        border-bottom: unset;
        i {
          width: 48px;
          height: 48px;
          display: inline-block;
          border: 1px solid #000000;
        }
        p {
          margin-top: 20px;
          span {
            font-size: 18px;
            color: #333333;
          }
        }
      }
      .bot {
        width: 100%;
        height: 322px;
        border: 1px solid rgba(227, 227, 227, 1);
        border-top: unset;
      }
    }
    .box:hover {
      width: 414px;
      bottom: 30px;
      height: 500px;
      position: relative;
      transition-duration: 0.5s;
      .top {
        border: none;
        height: 204px;
        padding-top: 77px;
        background-color: unset;
        background: url('../../assets/home/newsBg.png') round;
        i {
          border: 1px solid #ffffff;
        }
        p {
          margin-top: 14px;
          span {
            font-size: 24px;
            color: #ffffff;
          }
        }
      }
      .bot {
        width: 100%;
        height: 351px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      }
    }
    .box:nth-child(2) {
      .top {
        border: unset;
        border-top: 1px solid rgba(227, 227, 227, 1);
      }
      .bot {
        border: unset;
        border-bottom: 1px solid rgba(227, 227, 227, 1);
      }
    }
    .box:nth-child(2):hover {
      .top {
        border: none;
      }
    }
  }
}
.contentGraySecond {
  width: 100%;
  height: 500px;
  background-color: #f7f8fa;
  padding: 52px 404px 0 404px;
  h3 {
    font-size: 32px;
    color: #313d53;
    font-weight: bold;
  }
  p {
    margin-top: 16px;
    span {
      font-size: 16px;
      color: #999999;
    }
  }
}
</style>