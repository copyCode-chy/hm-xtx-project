<template>
  <div class="help-center-container">
    <div class="help-center-header">
      <h1>帮助中心</h1>
      <p>常见问题解答与使用指南</p>
    </div>
    
    <div class="help-center-content">
      <div class="faq-section">
        <h2>常见问题</h2>
        <div class="faq-item">
          <div class="faq-question">如何修改个人信息？</div>
          <div class="faq-answer">登录后，点击右上角头像进入个人中心，选择"账户设置"即可修改个人信息。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">订单如何取消？</div>
          <div class="faq-answer">在"我的订单"页面，找到需要取消的订单，点击"取消订单"按钮，按照提示操作即可。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">如何退换货？</div>
          <div class="faq-answer">收货后7天内，商品完好且不影响二次销售的情况下，可在订单详情页申请退换货。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">忘记密码怎么办？</div>
          <div class="faq-answer">在登录页面点击"忘记密码"，按照提示通过手机验证码重置密码。</div>
        </div>
      </div>
      
      <div class="contact-section">
        <h2>联系我们</h2>
        <p>客服电话：400-123-4567</p>
        <p>工作时间：9:00-18:00（周一至周日）</p>
        <p>邮箱：support@example.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 帮助中心页面逻辑
</script>

<style lang="scss" scoped>
.help-center-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.help-center-header {
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

.help-center-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.faq-section {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
}

.faq-item {
  margin-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0;
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }
}

.faq-question {
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  color: #666;
  line-height: 1.6;
}

.contact-section {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  p {
    margin-bottom: 10px;
    color: #666;
  }
}

@media (max-width: 768px) {
  .help-center-content {
    grid-template-columns: 1fr;
  }
}
</style>