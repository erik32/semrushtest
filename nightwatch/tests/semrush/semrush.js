module.exports = {
  'seobar test' : function (browser) {
    browser
      .url('http://www.lenta.ru')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('div#seoquake-seobar-mainblock')
      .useXpath()
      .assert.containsText(".//*[@id='seoquake-seobar-paramtable']/tr/td[contains(@title, 'Webarchive age')]", "Age: ?")
      .end();
  }
};