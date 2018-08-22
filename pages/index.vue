<template>
    <div class="index-container">
        <header class="header">
            <div class="header-container">
                <div class="logo">
                    <img src="~/assets/common_tanyi_logo.png">
                </div>
                <div class="menu">
                    <div>
                        <a href="#bri">产品亮点</a>
                    </div>
                    <div>
                        <a href="#appli">应用行业</a>
                    </div>
                    <div>
                        <a href="#show">技术优势</a>
                    </div>
                    <div>
                        <a href="#effect">使用效果</a>
                    </div>
                    <div>
                        <a href="#form">渠道合作</a>
                    </div>
                    <div>
                        <a href="#about">关于一知</a>
                    </div> 
                    <div>
                        <a class="btn" href="https://robot.yiwise.com">登录</a>
                    </div> 
                </div>
            </div>
        </header>
        <main class="main-container">
            <div class="banner">
                <p class="title">携手探意<br>共享语音智能新时代</p>
                <p class="body">用最前沿的AI技术，让电销产业拥抱智能化变革</p>
                <button class="opt-btn">免费体验</button>

                <lottie class="lottie" :options="defaultOptions" :height="540" :width="894.6"/>
            </div>

            <div id="bri" class="img-container">
                <img v-if="currindex==0" src="/images/gongneng_huahsupeizhi.png">
                <img v-else-if="currindex==1" src="/images/gongneng_kehu.png">
                <img v-else-if="currindex==2" src="/images/gongneng_piliangxiazai.png">
                <img v-else-if="currindex==3" src="/images/gongneng_kehushaixuan.png">
                <div class="right-panel">
                    <div class="title">
                        更智能的使用体验
                    </div>
                    <div class="info-container">
                        <div v-for="(item, index) in infoContainer" :key="index" @click="jumpto(index)" class="one">
                            <div class="tit" :style="colorTit[index]">
                                {{item.tit}}
                            </div>
                            <div class="des" :style="colorDes[index]">
                                {{item.des}}
                            </div>
                        </div>
                    </div>
                    <div class="selected" :style="top">
                        <div class="selected-bg">
                            <div class="tra">

                            </div>
                            <div class="rec">

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
        <section id="appli" class="methods">
        <div class="methods-container">
            <div class="title">
                行业解决方案
            </div>
            <div class="main">
                <div @mouseover="showup(-1)" @mouseout="showup(-1)" class="column">
                    <div class="con">
                        <img src="/images/icon_jinrong_x2.png">
                        <!-- <img src="~/assets/icon_dianshagnxiaofei.png"> -->
                        <div class="text">
                            金融科技
                        </div>
                    </div>
                    <div :class="cardShow.left? 'showhhh': 'hidehhh'" class="detail center">
                        <img src="/images/hagnye_icon_jinrong_2x_min.png">
                        <div class="layout">
                            <div class="text">
                                智能金融大使：<br>在银行、保险、证券基金等领域，为客户提供专业化金融服务，帮助企业塑造金融大使形象。
                            </div>
                            <div class="checkpoint">
                                <div>
                                    提醒催收
                                </div>
                                <div>
                                    满意度回访
                                </div>
                                <div>
                                    身份认证
                                </div>
                                <div>
                                    投诉咨询
                                </div>
                            </div>
                            <div class="btn-container">
                                <div @click="dialogVisible = true" class="btn">
                                    试听
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div @mouseover="showup(0)" @mouseout="showup(0)" class="column">
                    <div class="con">
                        <img src="/images/icon_shenghuofuwu_x2.png">
                        <!-- <img src="~/assets/icon_dianshagnxiaofei.png"> -->
                        <div class="text">
                            生活服务
                        </div>
                    </div>
                    <div :class="cardShow.center? 'showhhh': 'hidehhh'" class="detail center">
                        <img src="/images/icon_shenghuofuwu_x2_min.png">
                        <div class="layout">
                            <div class="text">
                                智能生活管家：<br>似贴心管家般与用户深度交流，洞察用户需求，帮助地产、教育、公共事业等领域提升务效率，创造服务机遇。
                            </div>
                            <div class="checkpoint">
                                <div>
                                    意向筛选
                                </div>
                                <div>
                                    产品续费
                                </div>
                                <div>
                                    问卷调查
                                </div>
                                <div>
                                    群发短信
                                </div>
                            </div>
                            <div class="btn-container">
                                <div @click="dialogVisible = true" class="btn">
                                    试听
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div @mouseover="showup(1)" @mouseout="showup(1)" class="column">
                    <div class="con">
                        <img src="/images/icon_dianshagnxiaofei_x2.png">
                        <!-- <img src="~/assets/icon_dianshagnxiaofei.png"> -->
                        <div class="text">
                            电商消费
                        </div>
                    </div>
                    <div :class="cardShow.right? 'showhhh': 'hidehhh'" class="detail center">
                        <img src="/images/icon_dianshagnxiaofei_x2_min.png">
                        <div class="layout">
                            <div class="text">
                                智能电商助理：<br>以大数据驱动，精准分析用户消费诉求，助力品牌精细化运营，有效提升品牌流量转化。
                            </div>
                            <div class="checkpoint">
                                <div>
                                    客户接待
                                </div>
                                <div>
                                    售后服务
                                </div>
                                <div>
                                    老客户召回
                                </div>
                                <div>
                                    会员关怀
                                </div>
                            </div>
                            <div class="btn-container">
                                <div @click="dialogVisible = true" class="btn">
                                    试听
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="logo">
                <img style="width: 103px;height: 29px;" src="~/assets/neteast_logo.png">
                <img style="width: 149px;height: 31px;" src="~/assets/alibaba_logo.png">
                <img style="width: 116px;height: 31px;" src="~/assets/microsoft_logo.png">
                <img style="width: 104px;height: 31px;" src="~/assets/didi_logo.png">
                <img style="width: 159px;height: 31px;" src="~/assets/tencentl_logo.png">

            </div>
        </div>

        <el-dialog
            :visible.sync="dialogVisible"
            title="智能电商助理正在为客户服务"
            width="528px"
            top="10vh">
            <div class="modal-container">
                <div v-for="(item, index) in recordList" :key="index">
                    
                    <div :class="item.placement == 'left'?'left':'right'">
                        <img v-if="item.placement == 'left'" src="~/assets/common_icon_jiqirentouxiang.png">
                        <div role="tooltip"
                            aria-hidden="false"
                            class="el-popover el-popper el-popover--plain clearfix"
                            
                            tabindex="0"
                            style="transform-origin: left center 0px;"
                            :x-placement="item.placement == 'left'?'right':'left'"
                            @click="handleListen()"
                        >
                        <!-- <i
                            :class="`icon-voice${playState === 'play' ? ' icon-voice-play' : ''}`"
                            v-if="item.placement == 'right'"
                        >
                        </i> -->
                        <slot name="message">{{item.text}}</slot>
                        <div x-arrow="" class="popper__arrow" style="top:0px;"></div>
                        </div>
                        <img v-if="item.placement == 'right'" src="~/assets/common_icon_morentouxiang.png">
                    </div>

                </div>
            </div>
            <span slot="footer" class="dialog-footer">
<!-- <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> -->
            </span>
        </el-dialog>
    </section>
    <section id="show" class="carousel">
        <div class="text">
            专业算法团队，为电话机器人注入智能化基因
        </div>
        <div class="carousel-container">
            <el-carousel :interval="4000" type="card" height="362px">
                <el-carousel-item>
                    <div class="slide-1">
                        <div class="title">
                            自研式语音识别技术
                        </div>
                        <div class="body">
                            自主研发行业级语义纠错过滤器，实现更精准语音识别
                        </div>
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src="~/assets/icon_shujujilei.png">
                                    <div>数据积累</div>
                                </div>
                                <div>
                                    <img src="~/assets/icon_kuaisuhuikui.png">
                                    <div>快速回馈</div>
                                </div>
                                <div>
                                    <img src="~/assets/icon_dingzhihua.png">
                                    <div>高定制化</div>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <img src="~/assets/icon_jiucuo.png">
                                    <div>场景纠错</div>
                                </div>
                                <div>
                                    <img src="~/assets/icon_yuyizengqing.png">
                                    <div>语音增强</div>  
                                </div>
                                <div>
                                    <img src="~/assets/iocn_yuyinhecheng.png">
                                    <div>语音合成</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="slide-1">
                        <div class="title">
                            深度学习实现语义理解
                        </div>
                        <div class="body">
                            自适应深度学习语义理解将提供更多可能性
                        </div>
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src="~/assets/iocn_duolunduihua.png">
                                    <div>多伦对话</div>
                                </div>
                                <div>
                                    <img src="~/assets/iocn_zishiyingxuexi.png">
                                    <div>自适应学习</div>
                                </div>
                                <div>
                                    <img src="~/assets/icon_jilu.png">
                                    <div>记录生成</div>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <img src="~/assets/icon_yuedulijie.png">
                                    <div>阅读理解</div>
                                </div>
                                <div>
                                    <img src="~/assets/icon_zhishitupu.png">
                                    <div>知识图谱</div>  
                                </div>
                                <div>
                                    <img src="~/assets/icon_jueceyouhua.png">
                                    <div>决策优化</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="slide-3">
                        <div class="title">
                            多项人机交互技术专利
                        </div>
                        <div class="body">
                            拥有超过30项人机交互专利，涉及对话交互，语义理解，用户画像等领域
                        </div>
                        <div class="paper">
                            <img src="/images/photo_zhuanli_2x.png" style="width:100%;">
                            <div class="row">
                                <div class="rowitem">
                                    <div class="lstitle">
                                        软件制作
                                    </div>
                                    <div class="lsbody">
                                        基于微信公众平台
                                        的智能问答系统v1.0
                                    </div>
                                </div>
                                <div class="rowitem">
                                    <div class="lstitle">
                                        发明专利
                                    </div>
                                    <div class="lsbody">
                                        一种基于多面排序网络解
                                        决推文预测转发任务的方法
                                    </div>
                                </div>
                                <div class="rowitem">
                                    <div class="lstitle">
                                        发明专利
                                    </div>
                                    <div class="lsbody">
                                        一种利用分层注意力上下文
                                        网络解决多伦视频问答的方法
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="slide-4">
                        <div class="title">
                            顶级NLP算法团队
                        </div>
                        <div class="body">
                            研发成员均来自顶尖院校，在国际会议及期刊发表多篇论文
                        </div>
                        <div class="college">
                            <img src="/images/logo_university_2x.png" width="100%;">
                        </div>
                    </div>
                </el-carousel-item>
                <!-- <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item> -->
            </el-carousel>
        </div>
    </section>
    <section id="effect" class="chart">
        <div class="title">
            助力企业提升电话营销/服务效率
        </div>
        <div class="chart-legend">
            <div class="legend-container">
                <div class="legend1">
                </div>
                <div class="text">人工</div>
            </div>
            <div class="legend-container">
                <div class="legend2">
                </div>
                <div class="text">AI机器人</div>
            </div>
        </div>
        <div class="chart-container" ref="chart">
            <div v-for="(item, index) in chart" :key="index" class="column">
                <div class="chart-box">
                    <div class="chart1" :style="chart1[index]">
                        <p class="mark">{{item.mark1}}</p>
                    </div>
                    <div class="chart2" :style="chart2[index]">
                        <p class="mark">{{item.mark2}}</p>
                    </div>
                </div>
                <div class="text">
                    {{item.text}}
                </div>
            </div>
        </div>
    </section>
    <section id="form" class="form">
        <div class="real">
            <div class="title">
                多样化渠道合作方式，一起共赢未来
            </div>
            <div class="tabbar">
                <el-tabs v-model="activeName" :stretch="true">
                    <el-tab-pane label="代理合作" name="first">
                        <div class="tab-container">
                            <div class="des-container">
                                <div class="left">
                                    <div class="title">
                                        我们为您提供
                                    </div>
                                    <div v-for="(item, index) in form[0].left" :key="index" class="content" @mouseover="formTurnto(index)">
                                        <div class="title-container">
                                            <img :src="`/images/dailihezuo_icon_${index+1}.png`">
                                            <div class="inner-title">
                                                {{item.title}}
                                            </div>
                                        </div>
                                        <!-- {{formSelected == index}} -->
                                        <div :class="[formSelected == index ? 'display' : 'notDisplay']" class="inner-body">
                                            {{item.des}}
                                        </div>
                                    </div>
                                    <div class="selected" :style="formSelectedHeight">
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="title">
                                        期望您具备
                                    </div>
                                    <div v-for="(item, index) in form[0].right" :key="index">
                                        <div class="right-content">
                                            <img :src="`/images/dailihezuo_icon_${index+1}_1.png`">
                                            <div class="text">
                                                {{item.text}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-container">
                                <div class="title">
                                    提交信息，快速代理云秒
                                </div>
                                <div>
                                    <el-form :model="formInline">
                                        <div class="row">
                                            <el-form-item label="公司名称" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="您的姓名" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="row">
                                            <el-form-item label="联系电话" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="代理区域" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                        </div>
                                        <el-form-item label="给我留言" label-width="100px">
                                            <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                                        </el-form-item>

                                    </el-form>
                                    <div class="btn">
                                        提交
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="商务合作" name="second">
                        <div class="tab-container">
                            <div class="des-container">
                                <div class="left">
                                    <div class="title">
                                        我们为您提供
                                    </div>
                                    <div v-for="(item, index) in form[1].left" :key="index" class="content" @mouseover="formTurnto(index)">
                                        <div class="title-container">
                                            <img :src="`/images/dailihezuo_icon_${index+1}.png`">
                                            <div class="inner-title">
                                                {{item.title}}
                                            </div>
                                        </div>
                                        <!-- {{formSelected == index}} -->
                                        <div :class="[formSelected == index ? 'display' : 'notDisplay']" class="inner-body">
                                            {{item.des}}
                                        </div>
                                    </div>
                                    <div class="selected" :style="formSelectedHeight">
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="title">
                                        期望您具备
                                    </div>
                                    <div v-for="(item, index) in form[1].right" :key="index">
                                        <div class="right-content">
                                            <img :src="`/images/dailihezuo_icon_${index+1}_1.png`">
                                            <div class="text">
                                                {{item.text}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-container">
                                <div class="title">
                                    提交信息，快速代理云秒
                                </div>
                                <div>
                                    <el-form :model="formInline">
                                        <div class="row">
                                            <el-form-item label="公司名称" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="您的姓名" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="row">
                                            <el-form-item label="联系电话" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="代理区域" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                        </div>
                                        <el-form-item label="给我留言" label-width="100px">
                                            <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                                        </el-form-item>

                                    </el-form>
                                    <div class="btn">
                                        提交
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="战略合作" name="third">
                        <div class="tab-container">
                            <div class="des-container">
                                <div class="left">
                                    <div class="title">
                                        我们为您提供
                                    </div>
                                    <div v-for="(item, index) in form[2].left" :key="index" class="content" @mouseover="formTurnto(index)">
                                        <div class="title-container">
                                            <img :src="`/images/dailihezuo_icon_${index+1}.png`">
                                            <div class="inner-title">
                                                {{item.title}}
                                            </div>
                                        </div>
                                        <!-- {{formSelected == index}} -->
                                        <div :class="[formSelected == index ? 'display' : 'notDisplay']" class="inner-body">
                                            {{item.des}}
                                        </div>
                                    </div>
                                    <div class="selected" :style="formSelectedHeight">
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="title">
                                        期望您具备
                                    </div>
                                    <div v-for="(item, index) in form[2].right" :key="index">
                                        <div class="right-content">
                                            <img :src="`/images/dailihezuo_icon_${index+1}_1.png`">
                                            <div class="text">
                                                {{item.text}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-container">
                                <div class="title">
                                    提交信息，快速代理云秒
                                </div>
                                <div>
                                    <el-form :model="formInline">
                                        <div class="row">
                                            <el-form-item label="公司名称" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="您的姓名" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="row">
                                            <el-form-item label="联系电话" label-width="100px">
                                                <el-input v-model="form.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="代理区域" label-width="100px">
                                                  <el-select v-model="form.distribute" @change="getCities(form.distribute)" placeholder="选择省份">
                                                        <el-option
                                                        v-for="item in province"
                                                        :key="item"
                                                        :label="item"
                                                        :value="item">
                                                        </el-option>
                                                    </el-select>
                                                    <el-select v-model="form.distribute" placeholder="选择市区" style="margin-left:16px;">
                                                        <el-option
                                                        v-for="item in cities"
                                                        :key="item"
                                                        :label="item"
                                                        :value="item">
                                                        </el-option>
                                                    </el-select>
                                                <!-- <el-input v-model="form.name"></el-input> -->
                                            </el-form-item>
                                        </div>
                                        <el-form-item label="给我留言" label-width="100px">
                                            <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                                        </el-form-item>

                                    </el-form>
                                    <div class="btn">
                                        提交
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="商务合作" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="战略合作" name="third">角色管理</el-tab-pane> -->
                </el-tabs>
            </div>
        </div>
    </section>
    <section id="about" class="about" ref="about" :class="[aa ? 'appear' : 'notAppear', 'appearMotion']">
        <div class="text">
            <div class="title">
                一知，一问便知
            </div>
            <div class="body">
                <div class="first">
                    一知智能是国内领先的人机交互智能服务AI公司，专注于中文语境下的人工智能底层语义理解技术。基于深度学习语义理解和语音处理算法，致力于研发业界领先的对话式交互AI解决方案，优化人机交互在场景化智能服务应用中的使用体验。
                </div>
                <div class="second">
                    一知智能力求持续为客户创造人工智能技术变革所带来的价值，在降低企业成本的同时，大幅提升工作效率，为实现强人工智能终极目标深耕不辍
                </div>
            </div>
            <div class="btn">
                关于一知
            </div>
        </div>
        <div class="qrcode">
            <img src="/images/qrcode_2x.png">
            <div>
                扫码关注一知公众号
            </div>
        </div>
    </section>
    <section class="media">
        <div class="container">
            <div class="title">
                众多媒体报道
            </div>
            <div class="logo">
                <div @mouseover="toogle(0)" @mouseout="toogle(0)">
                    <img v-if="mediaSelected[0]" src="~/assets/meiti_logo_renminwang_h.png">
                    <img v-else src="~/assets/meiti_logo_renminwang_n.png">
                </div>
                <div @mouseover="toogle(1)" @mouseout="toogle(1)">
                    <img v-if="mediaSelected[1]" src="~/assets/meiti_logo_xinhuawang_h.png">
                    <img v-else src="~/assets/meiti_logo_xinhuawang_n.png">
                </div>
                <div @mouseover="toogle(2)" @mouseout="toogle(2)">
                    <img v-if="mediaSelected[2]" src="~/assets/meiti_logo_touzijie_h.png">
                    <img v-else src="~/assets/meiti_logo_touzijie_n.png">
                </div>
                <div @mouseover="toogle(3)" @mouseout="toogle(3)">
                    <img v-if="mediaSelected[3]" src="~/assets/meiti_logo_jiqizhixin_h.png">
                    <img v-else src="~/assets/meiti_logo_jiqizhixin_n.png">
                </div>
            </div>
        </div>
    </section>
    <section class="footer">
        <div class="text">
            Copyright © 2017 浙ICP备23333333号 版权所有 杭州一知智能科技有限公司　　 联系我们：440-880-8888
        </div>
    </section>
    </div>
</template>

<script>
import Lottie from '@/components/lottie.vue';
import * as animationData from './data.json';
import axios from 'axios'

export default {
    components: {
        'lottie': Lottie
    },
    async asyncData(context) {
        // const {data} = (await axios.get('http://192.168.120.95:9090/apiOpe/distributorApplication/getProvinces')).data
        // console.log(data)
        // return { province: data }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    data() {
        return {
            currindex: 0,
            cities: [],
            cardShow: {
                left: false,
                center: false,
                right: false
            },
            defaultOptions: {animationData: animationData},
            vis: true,
            recordList: [
                {
                    placement: 'left',
                    text: '这次我们是首次开盘，不同的楼层价格都是不一样的，目前均价在20000元左右，是个价格洼地，后面肯定会涨价的，现在买最划算'
                },
                {
                    placement: 'left',
                    text: '这次我们是首次开盘，不同的楼层价格都是不一样的，目前均价在20000元左右，是个价格洼地，后面肯定会涨价的，现在买最划算'
                },
                {
                    placement: 'right',
                    text: '这次我们是首次开盘，不同的楼层价格都是不一样的，目前均价在20000元左右，是个价格洼地，后面肯定会涨价的，现在买最划算'
                },
            ],
            mediaSelected: [
                false,
                false,
                false,
                false
            ],
            curMethods: 1,
            formInline: {
                user: '',
                region: ''
            },
            formSelected: 0,
            formSelectedHeight: {
                top: '-60px'
            },
            curImg: '',
            imgList: [
                ''
            ],
            form: [
                {
                    left: [
                        {
                            title: '有竞争力的产品',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_1.png',
                            top: '60'
                        },
                        {
                            title: '合理的利润分配',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_2.png',
                            top: '109'
                        },
                        {
                            title: '专业的市场推广',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_3.png',
                            top: '155'
                        },
                        {
                            title: '强大的售后支持',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_4.png',
                            top: '205'
                        },
                        {
                            title: '稳定的市场保障',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_5.png',
                            top: '254'
                        },
                    ],
                    right: [
                        {
                            text: '具有共同的价值观'
                        },
                        {
                            text: '有成熟稳定的团队'
                        },
                        {
                            text: '有SAAS产品操作经验'
                        },
                        {
                            text: '有目标行业的企业资源'
                        },
                        {
                            text: '有明确的发展计划'
                        },
                    ]
                },
                {
                    left: [
                        {
                            title: '强大的技术团队',
                            des: '以NLP算法为核心技术，年轻且有丰富项目经验的技术小伙伴',
                            img: 'dailihezuo_icon_1.png',
                            top: '60'
                        },
                        {
                            title: '数量众多的B端资源',
                            des: '以金融、房产、教育、装修等行业为主的企业客户',
                            img: 'dailihezuo_icon_2.png',
                            top: '109'
                        },
                        {
                            title: '期待合作的态度',
                            des: '期待与各位伙伴认识，并共同探讨合作的可能和方式',
                            img: 'dailihezuo_icon_3.png',
                            top: '155'
                        },
                        {
                            title: '合作的落地能力',
                            des: '已与众多伙伴达成合作，共同获得可喜的成长',
                            img: 'dailihezuo_icon_4.png',
                            top: '205'
                        },
                        {
                            title: '稳定的市场保障',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_5.png',
                            top: '254'
                        },
                    ],
                    right: [
                        {
                            text: '共同的客户群体'
                        },
                        {
                            text: '互补的技术实力'
                        },
                        {
                            text: '流量资源和曝光窗口'
                        },
                        {
                            text: '有目标行业的企业资源'
                        },
                        {
                            text: '有明确的发展计划'
                        },
                    ]
                },
                {
                    left: [
                        {
                            title: '强大的技术团队',
                            des: '以NLP算法为核心技术，年轻且有丰富项目经验的技术小伙伴',
                            img: 'dailihezuo_icon_1.png',
                            top: '60'
                        },
                        {
                            title: '数量众多的B端资源',
                            des: '以金融、房产、教育、装修等行业为主的企业客户',
                            img: 'dailihezuo_icon_2.png',
                            top: '109'
                        },
                        {
                            title: '期待合作的态度',
                            des: '期待与各位伙伴认识，并共同探讨合作的可能和方式',
                            img: 'dailihezuo_icon_3.png',
                            top: '155'
                        },
                        {
                            title: '合作的落地能力',
                            des: '已与众多伙伴达成合作，共同获得可喜的成长',
                            img: 'dailihezuo_icon_4.png',
                            top: '205'
                        },
                        {
                            title: '稳定的市场保障',
                            des: '以NLP为核心积水，为AI机器人的思考打造最强大脑',
                            img: 'dailihezuo_icon_5.png',
                            top: '254'
                        },
                    ],
                    right: [
                        {
                            text: '共同的客户群体'
                        },
                        {
                            text: '互补的技术实力'
                        },
                        {
                            text: '流量资源和曝光窗口'
                        },
                        {
                            text: '有目标行业的企业资源'
                        },
                        {
                            text: '有明确的发展计划'
                        },
                    ]
                },
            ],
            activeName: 'second',
            appear: [
                {
                    transform: 'translate(0px, 14px)',
                    opacity: '0.3'
                }
            ],
            xBind: {
                transform: 'translateX(0px)'
            },
            chart1: [
                {
                    height: '0px',
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
            ],
            chart2: [
                {
                    height: '0px',
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
                {
                    height: '0px'
                },
            ],
            chart: [
                {
                    text: '时间利用率',
                    height1: 128,
                    height2: 173,
                    mark1: '250天',
                    mark2: '365天',
                },
                {
                    text: '工作效能',
                    height1: 61,
                    height2: 173,
                    mark1: '300个/天',
                    mark2: '1000个/天',
                },
                {
                    text: '工作态度',
                    height1: 16,
                    height2: 173,
                    mark1: '不可控',
                    mark2: '稳定',
                },
                {
                    text: '资金成本',
                    height1: 173,
                    height2: 38,
                    mark1: '5W/年/人',
                    mark2: '1W/年/人',
                },
                {
                    text: '销售业绩',
                    height1: 23,
                    height2: 173,
                    mark1: '30笔/月',
                    mark2: '300笔/月',
                }
            ],
            dialogVisible: false,
            selected: 0,
            top: {
                top: '86px'
            },
            colorTit: [
                {
                    color: '#ffffff',
                },
                {
                    color: '#000000'
                },
                {
                    color: '#000000'
                },
                {
                    color: '#000000'
                }
            ],
            colorDes: [
                {
                    color: '#ffffff'
                },
                {
                    color: '#919394'
                },
                {
                    color: '#919394'
                },
                {
                    color: '#919394'
                },
            ],
            infoContainer: [
                {
                    tit: '自主话术配置，模板一键修改',
                    des: '海量真人语音库，自主设置对话树，自助修改秒上线',
                    height: '87px'
                },
                {
                    tit: '多轮会话应用，支持灵活打断',
                    des: '对话状态追踪，对话语义理解，流畅对话体验',
                    height: '173px'
                },
                {
                    tit: '录音批量下载，异常预警提醒',
                    des: '录音批量可下载，线路异常秒提醒，意向反馈早知道',
                    height: '260px'
                },
                {
                    tit: '户筛选，多方实时推送',
                    des: '智能意向分析，精准客户画像，多微信号实时推送',
                    height: '347px'
                }
            ],
            changed: [
                false,
                false
            ],
            aa: false
        }
    },
    computed: {
    },
    methods: {
        async getCities(item) {
            const {data} = (await axios.get(`http://192.168.120.95:9090/apiOpe/distributorApplication/getCitiesByProvince?province=${item}`)).data
            console.log(data)
        },
        toogle(index) {
            console.log(this.mediaSelected[index])
            this.mediaSelected[index] = ! this.mediaSelected[index]
            this.$set(this.mediaSelected, index, this.mediaSelected[index]);
        },
        showup(index) {
            if(index == -1) {
                this.cardShow.left = !this.cardShow.left
            } else if (index == 0) {
                this.cardShow.center = !this.cardShow.center
            } else {
                this.cardShow.right = !this.cardShow.right
            }
            // this.cardShow = !this.cardShow;
        },
        swap() {
            this.xBind = {
                transform: 'translateX(200px)'
            }
        },
        formTurnto(index) {
            console.log(index)
            this.formSelected = index;
            this.formSelectedHeight = {
                top: `${this.form[0].left[index].top}px`
            }
            console.log(this.formSelectedHeight.top)
        },
        handleScroll() {
            if(!this.changed[0] && ((this.$refs["chart"].getBoundingClientRect()).top <= document.documentElement.clientHeight*3/4)) {
                this.changed[0] = true
                this.chart.forEach((item, index) => {
                    this.chart1[index].height = `${this.chart[index].height1}px`
                    this.chart2[index].height = `${this.chart[index].height2}px`
                })
            }
            if(!this.aa && ((this.$refs["about"].getBoundingClientRect()).top <= document.documentElement.clientHeight*3/4)) {
                this.aa = true
                console.log(this.aa)
            }
        },
        jumpto(index) {
            this.colorTit[this.selected] = {
                color: '#000000'
            }
            this.colorDes[this.selected] = {
                color: '#919394'
            }
            this.selected = index;
            this.colorTit[this.selected] = {
                color: '#ffffff'
            }
            this.colorDes[this.selected] = {
                color: '#ffffff'
            }
            // console.log(index, this.infoContainer[index].height)
            this.top = {
                top: this.infoContainer[this.selected].height
            }
            this.currindex = index
            console.log(this.top)
        }
    }
}
</script>

<style lang="less">
body {
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
.el-tabs__content {
    box-shadow: 0px 0px 35px 0px 
		rgba(0, 37, 162, 0.18);
    border-radius: 5px;
    margin-top: 20px;
}
.el-dialog__footer {
    display: flex;
    justify-content: center;
    margin-top: -50px;
}
.left {
    padding: 10px 0px;
    display: flex;
    justify-content: flex-start;
}
.right {
    padding: 10px 0px;
         border-bottom: 2px solid #ccc!important;
     border-color: #1890ff!important;
    display: flex;
    justify-content: flex-end;
    .el-popover {
        background-color: #1890ff;
        color: #ffffff;
        box-shadow: 1px 2px 10px 0px 
		rgba(69, 99, 197, 0.41);
        .popper__arrow::after {
            border-left-color: #1890ff;
        }
    }
}
.el-popover {
    max-width: 80%;
    position: relative;
    // margin: 10px 0px;
}
.modal-container {
    padding: 10px;
    img {
        height: 27px;
        width: 27px;
    }
    .row {
        padding: 100px 10px;
    }
}
.el-dialog__body {
    height: 100% - 13px;
    overflow: scroll;
    padding-top: 10px;
}
.el-carousel {
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 40px;
}
.el-select {
    .el-input {
        width: 100px !important;
    }
}
.el-input {
    width: 216px;
}
.el-input__inner {
    height: 31px;
}
.el-form-item__label {
    font-family: PingFangSC-Regular;
	font-size: 14px;
}
.el-tabs__header {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.el-tabs__active-bar {
    // width: 20px !important;
    // left: 140px;
    background-image: linear-gradient(90deg, 
		#008aff 0%, 
		#0362ff 99%), 
	linear-gradient(
		#008aff, 
		#008aff);
	background-blend-mode: normal, 
		normal;
	border-radius: 2px;
}
.el-tabs__item {
    font-family: PingFangSC-Medium;
	font-size: 21px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #969698;
}
.el-tabs__item:hover {
    color: #969698 !important;
    cursor: pointer;
}
.el-tabs__nav-wrap::after {
    background-color: transparent;
}
// .el-tabs__active-bar {
//     // bottom: -20px;
// }
.el-tabs__nav {
    height: 50px;
}
.appearMotion {
    transition: transform 1s ease, opacity 1s ease;
}
.notDisplay {
    opacity: 0;
}
.display {
    opacity: 1;
}
.notAppear {
    transform: translate(0px, 30px);
    opacity: 0;
}
.appear {
    transform: translate(0px, 0px);
    opacity: 1;
}

.hidehhh {
    opacity: 0;
    transform: scale(0);
}
.showhhh {
    opacity: 1;
    transform: scale(1);
}
.el-dialog {
	height: 572px;
    background-image: linear-gradient(
		#f9fafe, 
		#f9fafe), 
	linear-gradient(
		#ffffff, 
		#ffffff);
	background-blend-mode: normal, 
		normal;
	box-shadow: 2px 4px 20px 0px 
		rgba(74, 15, 180, 0.68);
    border-radius: 10px;
    .el-dialog__header {
        text-align: center;
        .el-dialog__title {
            font-size: 21px;
        }
    }
}
.el-carousel__item {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    text-align: center;
    box-shadow: 2px 4px 20px 0px 
		rgba(57, 45, 91, 0.29);
	border-radius: 6px;
    // display: flex;
    // justify-content: center;
}
//  .el-carousel__item:nth-child(2n) {
//      background-color: #99a9bf;
//   }
.index-container {
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 73px;
        background-color: #1890ff;
        .text {
            text-align: center;
            font-family: PingFangSC-Light;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #ffffff;
        }
    }
    .media {
        background-color: #f9fafe;
        .container {
            padding-top: 40px;
            margin-top: 157px;
            max-width: 1200px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 72px;
            padding-bottom: 39px;
            .title {
                text-align: center;
                font-family: PingFangSC-Regular;
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 64px;
                letter-spacing: 0px;
            }
            .logo {
                img {
                    width: 50%;
                    height: 50%;
                    cursor: pointer;
                }
                margin-top: 21px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                div {
                    display: flex;
                    justify-content: center;
                }
            }
        }

    }
    .about {
        max-width: 1150px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 50px;
        display: flex;
        .text {
            padding-right: 80px;
            .title {
                font-family: PingFangSC-Medium;
                font-size: 32px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 64px;
                letter-spacing: 0px;
            }
            .body {
                font-family: PingFangSC-Light;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 22px;
                letter-spacing: 0px;
                .first {
                    margin-top: 20px;
                }
                .second {
                    margin-top: 13px;
                }
            }
            .btn {
                cursor: pointer;
                margin-top: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 27px;
                letter-spacing: 0px;
                color: #ffffff;
                width: 98px;
                height: 31px;
                background-color: #1890ff;
                background-blend-mode: normal, 
                    normal;
                border-radius: 20px;
            }
        }
        .qrcode {
            display: flex;
            flex-direction: column;
            justify-content: center;
            // margin-top: 70px;
            img {
                height: 150px;
                width: 150px;
            }
            div {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 19px;
                letter-spacing: 0px;
                margin-top: 0px;
                text-align: center;
            }
        }
    }
    .chart {
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 72px;
        margin-bottom: 50px;
        .title {
            text-align: center;
            font-family: PingFangSC-Medium;
            font-size: 31px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 64px;
            letter-spacing: 0px;
            color: #000000;
        }
        .chart-legend {
            margin-top: 41px;
            margin-right: 34px;
            display: flex;
            justify-content: flex-end;
            .legend-container {
                display: flex;
                align-items: center;
                .text {
                    font-family: PingFangSC-Regular;
	                font-size: 14px;
                    margin-left: 10px;
                }
            }
            .legend1 {
                width: 24px;
                height: 15px;
                background-image: linear-gradient(236deg, 
                    #ff3c00 0%, 
                    #ff0071 100%), 
                linear-gradient(
                    #a49ea0, 
                    #a49ea0);
                background-blend-mode: normal, 
                    normal;
                border-radius: 6px;
            }
            .legend2 {
                margin-left: 32px;
                width: 24px;
                height: 15px;
                background-image: linear-gradient(17deg, 
                    #008aff 0%, 
                    #00cffc 99%), 
                linear-gradient(
                    #a49ea0, 
                    #a49ea0);
                background-blend-mode: normal, 
                    normal;
                border-radius: 6px;
            }
        }
        .chart-container {
            margin-top: 33px;
            display: flex;
            justify-content: space-around;
            .text {
                margin-top: 0px;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 61px;
                letter-spacing: 0px;
                color: #000000;
                text-align: center;
            }
            .chart-box {
                align-items: flex-end;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #3f4142;
                width: 171px;
                height: 217px;
                background-color: #f8f9fd;
                border-radius: 10px;
                padding: 40px 52px 13px 52px;
                display: flex;
                justify-content: space-between;
                .mark {
                    // display: inline-flex;
                    text-align: center;
                    position: relative;
                    top: -20px;
                    left: -18px;
                    width: 60px;
                }
                .chart1 {
                    transition: height 1.6s ease-out;
                    width: 24px;
                    // height: 229px;
                    background-image: linear-gradient(236deg, 
                        #ff3c00 0%, 
                        #ff0071 100%), 
                    linear-gradient(
                        #a49ea0, 
                        #a49ea0);
                    background-blend-mode: normal, 
                        normal;
                    border-radius: 6px;
                }
                .chart2 {
                    transition: height 1.6s ease-out;
                    width: 24px;
                    // height: 229px;
                    background-image: linear-gradient(17deg, 
                        #008aff 0%, 
                        #00cffc 99%), 
                    linear-gradient(
                        #a49ea0, 
                        #a49ea0);
                    background-blend-mode: normal, 
                        normal;
                    border-radius: 6px;

                }
            }
        }
    }
    .form {
        background-color: #f9fafe;
        padding-bottom: 76px;
        .real {
            .is-active {
                color: #000000 !important;
                font-family: PingFangSC-Medium;
                font-size: 21px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
            }
            max-width: 1000px;
            margin-right: auto;
            margin-left: auto;
            padding-top: 72px;
            .title {
                text-align: center;
                font-family: PingFangSC-Medium;
                font-size: 33px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 64px;
                letter-spacing: 0px;
                color: #000000;
            }
            .tabbar {
                margin-top: 54px;
                .tab-container {
                    box-shadow: 0 12px 20px #d8e0e6;
                    // height: 858px;
                    border-radius: 0px 6px 0px 0px;
                    .des-container {
                        // wi
                        height: 316px;
                        display: flex;
                        // margin-top: 10px;
                        img {
                            height: 12px;
                            width: 12px;
                        }
                        .left {
                            flex-direction: column;
                            position: relative;
                            padding: 10px 21px 0px 36px;
                            background-color: #1890ff;
                            width: 50%;
                            .selected {
                                transition: top 0.4s ease;
                                width: 100%-10px;
                                left: 26px;
                                height: 51px;
                                position: absolute;
                                // background-color: #0362ff;
                                box-shadow: 4px 9px 30px 0px 
                                    rgba(0, 37, 162, 0.31);
                                border-radius: 4px;
                                border: solid 1px rgba(255, 255, 255, 0.5);
                            }
                            .title {
                                text-align: right;
                                font-family: PingFangSC-Semibold;
                                font-size: 20px;
                                font-weight: normal;
                                font-stretch: normal;
                                // line-height: 64px;
                                margin-bottom: -20px;
                                letter-spacing: 0px;
                                color: #ffffff;
                            }
                            .content {
                                // cursor: pointer;
                                padding: 12px 10px 1px 5px;
                                height: 48px;
                                .title-container {
                                    display: flex;
                                    align-items: center;

                                    .inner-title {
                                        margin-left: 10px;
                                        font-family: PingFangSC-Regular;
                                        font-size: 16px;
                                        color: #ffffff;                                
                                    }
                                }

                                .inner-body {
                                    transition: opacity 0.4s ease;
                                    margin-left: 22px;
                                    font-family: PingFangSC-Light;
                                    font-size: 12px;
                                    color: #b4d0ff;
                                }
                            }
                            
                        }
                        .right {
                            flex-direction: column;
                            padding: 10px 21px 25px 36px;
                            background-color: #ffffff;
                            justify-content: flex-start;
                            width: 50%;
                            .title {
                                text-align: right;
                                margin-bottom: -20px;
                                font-family: PingFangSC-Semibold;
                                font-size: 20px;
                                font-weight: normal;
                                font-stretch: normal;
                                // line-height: 64px;
                                letter-spacing: 0px;
                                color: #1890ff;
                            }
                            .right-content {
                                padding: 7px 0px 20px 5px;
                                font-family: PingFangSC-Light;
	                            font-size: 16px;
                                display: flex;
                                align-items: center;
                                .text {
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                    .form-container {
                        background-image: url('~/assets/tijiaoxinxi_bg.png');
                        background-color: #ffffff;
                        padding: 31px 110px 21px 110px;
                        .title {
                            font-family: PingFangSC-Medium;
                            font-size: 20px;
                            font-weight: normal;
                            font-stretch: normal;
                            margin-bottom: 28px;
                        }
                        .row {
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 114px;
                        height: 31px;
                        background-color: #1890ff;
                        background-blend-mode: normal, 
                            normal;
                        border-radius: 20px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #ffffff;
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 24px;
                        cursor: pointer;
                    }
                }
            }
        }
 
    }
    .carousel {
        // display: flex;
        // align-items: center;
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 62px;
        .text {
            font-family: PingFangSC-Medium;
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 64px;
            letter-spacing: 0px;
            color: #000000;
            text-align: center;
            margin-bottom: 10px;
        }
        .carousel-container {
            .title {
                font-family: PingFangSC-Regular;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 61px;
                letter-spacing: 0px;
                color: #000000;
            }
            .slide-1 {
                // margin-top: 20px;
                padding-top: 35px;
                .body {
                    margin-top: 0px;
                    font-family: PingFangSC-Light;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 31px;
                    letter-spacing: 0px;
                    color: #8c8d90;
                }
                .row {
                    margin-top: 14px;
                    font-size: 12px;
                    img {
                        height: 33px;
                        width: 33px;
                    }
                    .col {
                        color: #008cfd;
                        padding: 15px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                }
            }
            .slide-3 {
                padding: 10px 20px;
                .body {
                    font-family: PingFangSC-Thin;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    color: #656668;
                }
                .paper {
                    img {
                        width: 100%;
                    }
                    .row {
                        .rowitem {
                            width: 33.33%;
                        }
                        // padding-left: 5px;
                        // padding-right: 5px;
                        display: flex;
                        justify-content: space-around;
                        align-items: flex-start;
                        .lstitle {
                            font-family: PingFangSC-Regular;
	                        font-size: 16px;
                        }
                        .lsbody {
                            padding: 0px 4px;
                            font-family: PingFangSC-Thin;
	                        font-size: 12px;
                        }
                    }
                }
            }
            .slide-4 {
                padding: 10px 20px;
                .body {
                    margin-top: 5px;
                    font-family: PingFangSC-Thin;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    color: #656668;
                }
                .college {
                    margin-top: 40px;
                    img {
                        width: 90%;
                    }
                }
            }

        }
    }
    .methods {
        margin-top: 52px;
        width: 100vw;
        height: 585px;
        background-image: linear-gradient(90deg, 
        #5f49ff 0%, 
        #7d47ff 28%, 
        #8b3cff 100%), 
        linear-gradient(
        #1890ff, 
        #1890ff);
        background-blend-mode: normal, normal;
        .methods-container {
            max-width: 1200px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            .title {
                // margin-top: 101px;
                color: #ffffff;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                display: flex;
                justify-content: center;
            }
            .main {
                display: flex;
                justify-content: space-around;
                align-items: center;
                .column {
                    position: relative;
                    .con {
                        position: relative;
                    }
                    .detail {
                        transform-origin: center;
                        transition: transform 0.35s ease 0.1s, opacity 0.35s ease 0.1s;
                        left: -138px;
                        top: -45px;
                        position: absolute;
                        width: 386px;
                        height: 280px;
                        background-color: #ffffff;
                    }
                    // cursor: pointer;
                    // display: flex;
                    // flex-direction: column;
                    // align-items: center;
                    img {
                        width: 128px;
                        height: 128px;
                    }
                    text-align: center; 
                    .text {
                        font-family: PingFangSC-Regular;
                        font-size: 22px;
                        color: #ffffff;
                        line-height: 61px;
                    }                   
                }
                .ce {
                    margin-top: -30px;
                }
                .center {
                    // transition: transform 0.2s ease;
                    position: relative;
                    img {
                        position: absolute;
                        top: 0px;
                        left: 50%+3px;
                        right: 50%;
                        width: 60px;
                        height: 60px;
                        margin-left: -39px;
                        margin-top: -30px;
                    }
                    width: 386px;
                    height: 280px;
                    padding-left: 32px;
                    padding-right: 32px;

                    background-color: #ffffff;
                    box-shadow: 2px 4px 20px 0px 
                        rgba(74, 15, 180, 0.68);
                    border-radius: 10px;
                    .text {
                        padding: 0px 4px;
                        text-align: left;
                        margin-top: 46px;
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 23px;
                        letter-spacing: 0px;
                        color: #333333;
                    }
                    .checkpoint {
                        margin-top: 26px;
                        display: flex;
                        justify-content: space-between;
                        div {
                            padding: 4px 5px;
                            background-image: linear-gradient(
                                #dfdbff, 
                                #dfdbff), 
                            linear-gradient(
                                #a49ea0, 
                                #a49ea0);
                            background-blend-mode: normal, 
                                normal;
                            border-radius: 4px;
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            font-weight: normal;
                            font-stretch: normal;
                            line-height: 27px;
                            letter-spacing: 0px;
                            color: #724db5;
                            cursor: pointer;
                            width: 70px;
                            // vertical-align:
                            // height: 30px;
                            // display: flex;
                            // align-items: center
                        }
                    }
                    .btn-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 26px;
                        .btn {
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 114px;
                            height: 30px;
                            background-color: #bfbfbf;
                            // background-image: linear-gradient(
                            //     #ff0090, 
                            //     #ff0090), 
                            // linear-gradient(
                            //     #a49ea0, 
                            //     #a49ea0);
                            // background-blend-mode: normal, 
                            //     normal;
                            border-radius: 20px;
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            font-weight: normal;
                            font-stretch: normal;
                            line-height: 27px;
                            letter-spacing: 0px;
                            color: #ffffff;
                        }
                    }
                }
            }
            .logo {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
        }
    }
    .main-container {
        width: 100%;
        max-width: 1150px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
        .banner {
            padding-left: 30px;
            padding-top: 29px;
            width: 100%;
            height: 475px;
            position: relative;
            .lottie {
                z-index: 0 !important;
                position: absolute;
                top: -10px;
                left: 220px;
            }
            // background-image: url(~/assets/chatu.png);
            // background-size: 82%;
            // background-repeat: no-repeat;
            // background-position:  right top;
            .title {
                z-index: 5;
                position: relative;
                font-size: 32px;
                font-weight: 500;
                line-height: 52px;
                // margin: 8px 0 28px;
                letter-spacing: 0;
                font-family: PingFangSC-Medium;
                font-variant: tabular-nums;
                margin-top: 61px;
            }
            .body {
                z-index: 5;
                position: relative;
                font-size: 16px;
                margin-top: 48px;
                margin-bottom: 59px;
                font-family: PingFangSC-Thin;
            }
            .opt-btn {
            z-index: 5;

                background: #bfbfbf;
                // background: #1890ff;
                color: #fff;
                padding: 0 24px;
                border-radius: 100px;
                font-size: 14px;
                line-height: 38px;
                display: inline-block;
                height: 40px;
                text-align: center;
                margin-right: 16px;
                text-decoration: none;
                // border: 1px solid #1890ff;
                font-family: PingFangSC-Medium;
                font-variant: tabular-nums;
            }
        }
        .img-container {
            padding-top: 66px;
            display: flex;
            justify-content: space-around;
            img {
                width: 782px;
                height: 460px;
            }

            .right-panel {
                padding-top: 11px;
                position: relative;
                .title {
                    margin-left: 12px !important;
                    margin-bottom: 10px;
                    font-family: PingFangSC-Medium;
                    font-size: 32px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 64px;
                }
                .info-container {
                    z-index: 1000;
                    position: relative;
                    margin-left: 15px;
                    // color: #ffffff;
                    .one {
                        cursor: pointer;
                        height: 86px;
                        flex-direction: column;
                        display: flex;
                        justify-content: center;
                    }
                    .tit {
                        transition: color 0.12s ease-in 0.08s;
                        font-family: PingFangSC-Regular;
                        font-size: 18px;
                    }
                    .des {
                        transition: color 0.12s ease-in 0.08s;
                        font-family: PingFangSC-Light;
	                    font-size: 14px;
                    }
                }
                .selected {
                    transition: top 0.5s ease;
                    // top: 86px;
                    margin-left: -12px;
                    width: 100%+10px;
                    position: absolute;
                    .selected-bg {
                        width: 100%;
                        position: relative;
                        display: flex;
                        align-items: center;
                        .rec {
                            width: 100%;
                            height: 80px;
                            background-color: #1890ff;
                            box-shadow: 0px 0px 46px 0px 
                                rgba(0, 37, 162, 0.18);
                            border-radius: 4px;
                        }
                        .tra {
                            width: 0; 
                            height: 0; 
                            border-top: 5px solid transparent; 
                            border-right: 7px solid #2168f6; 
                            border-bottom: 5px solid transparent; 
                        }
                    }
                }
            }
        }
    }
    background-color: #ffffff;
    // height: 100vh + 500px;
    .header {
        padding-top: 28px;
        // margin-bottom: 53px;
        width: 100%;
        background-color: transparent !important;
        .header-container {
            padding-left: 40px;
            padding-right: 15px;
            // margin-left: auto;
            // margin-right: auto;
            // max-width: 1150px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                img {
                    width: 120px;
                    height: 32px;
                }
            }
            .menu {
                div {
                    cursor: pointer;
                    color: #3f3f3f;
                    display: inline-block;
                    font-family: PingFangSC-Regular;
                    padding: 8px 0px;
                    margin: 0px 29px;
                    font-size: 14px;
                    a {
                        color: #3f3f3f;
                        text-decoration:none;
                    }
                }
                .btn {
                    cursor: pointer;
                    color: #1890ff;
                    padding: 0 24px;
                    border-radius: 100px;
                    font-size: 14px;
                    line-height: 28px;
                    display: inline-block;
                    height: 28px;
                    text-align: center;
                    margin-right: 16px;
                    text-decoration: none;
                    border: 1px solid #1890ff;
                    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-variant: tabular-nums;
                }
            }
        }
    }
}
</style>