# SEMrush test

Npm, nightwatch.js and grunt should be installed.



#OnPrepare

```

Prepare Firefox profile with SEOquake panel:
a. Create new profile with name "webdriver" (https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles);
b. Install SEOquake plugin, activate it and set Seobar tick in it's settings;
c. Exit browser.
```


#Running

```
$ git clone https://github.com/erik32/semrushtest.git
$ cd nightwatch
$ grunt nightwatch:default
```
