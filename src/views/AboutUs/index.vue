<template>
  <div class="about-us-container">
    <div class="about-us-header">
      <h1>关于我们</h1>
      <p>了解小兔鲜电商平台的故事与价值观</p>
    </div>
    
    <div class="about-us-content">
      <div class="company-profile">
        <h2>公司简介</h2>
        <p>小兔鲜电商平台成立于2020年，是一家专注于新鲜农产品销售的电子商务平台。我们致力于为消费者提供最新鲜、最优质的农产品，同时支持农村振兴，帮助农民增收致富。</p>
        <p>通过直接与农场合作，我们砍掉中间环节，确保产品从田间到餐桌的新鲜度，为用户提供高性价比的生鲜产品。</p>
      </div>
      
      <div class="development-history">
        <h2>发展历程</h2>
        <ul class="timeline">
          <li>
            <span class="year">2020年</span>
            <p>小兔鲜平台正式上线，初期覆盖3个城市</p>
          </li>
          <li>
            <span class="year">2021年</span>
            <p>完成A轮融资，平台覆盖10个城市</p>
          </li>
          <li>
            <span class="year">2022年</span>
            <p>与100+农场建立合作关系，用户突破100万</p>
          </li>
          <li>
            <span class="year">2023年</span>
            <p>荣获"最佳生鲜电商平台"称号</p>
          </li>
        </ul>
      </div>
      
      <div class="corporate-culture">
        <h2>企业文化</h2>
        <div class="culture-values">
          <div class="value-item">
            <h3>诚信</h3>
            <p>坚守诚信原则，提供真实可靠的产品信息</p>
          </div>
          <div class="value-item">
            <h3>新鲜</h3>
            <p>确保每一件产品都新鲜优质，从源头把控品质</p>
          </div>
          <div class="value-item">
            <h3>创新</h3>
            <p>不断创新服务模式，提升用户体验</p>
          </div>
          <div class="value-item">
            <h3>责任</h3>
            <p>肩负社会责任，助力农业发展，保障食品安全</p>
          </div>
        </div>
      </div>
      
      <div class="team-introduction">
        <h2>团队介绍</h2>
        <div class="team-members">
          <div class="member">
            <div class="member-photo"></div>
            <h3>张明</h3>
            <p>创始人 & CEO</p>
          </div>
          <div class="member">
            <div class="member-photo"></div>
            <h3>李华</h3>
            <p>产品总监</p>
          </div>
          <div class="member">
            <div class="member-photo"></div>
            <h3>王芳</h3>
            <p>技术总监</p>
          </div>
          <div class="member">
            <div class="member-photo"></div>
            <h3>赵强</h3>
            <p>运营总监</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 关于我们页面逻辑
</script>

<style lang="scss" scoped>
.about-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-us-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
}

.about-us-content > div {
  margin-bottom: 40px;
  padding: 25px;
  background: #f9f9f9;
  border-radius: 8px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

p {
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

.timeline {
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
  }

  li {
    position: relative;
    margin-bottom: 25px;

    &::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #409eff;
    }
  }
}

.year {
  display: inline-block;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 5px;
}

.culture-values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.value-item {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  text-align: center;

  h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 18px;
  }
}

.team-members {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.member {
  text-align: center;
}

.member-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 15px;
  background: #e0e0e0;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .culture-values,
  .team-members {
    grid-template-columns: 1fr;
  }
}
</style>