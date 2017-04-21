# Betterlife Jhipster 框架

## 代码托管地址

  官网地址: https://github.com/skygreen2001/betterlife.jhipster

  ```
  > git clone https://github.com/skygreen2001/betterlife.jhipster
  > git clone git@github.com:skygreen2001/betterlife.jhipster.git
  ```

## 团队开发默认推荐
### 基本配置
  - JDK 1.8
  - Tomcat 8
  - Maven 3.39
  - Node v6.10.1

### IDE
  - IntelliJ IDEA
  - spring-tool-suite-3.8.3.RELEASE
  - Atom

### 使用框架
  - jHipster 4.2.0
    - **前端**
      - angular2
      - jquery 3.1.1

      - yarn
      - npm
      - webpack

    - **后端**
      - maven
      - spring
      - jwt
      - ehcache
      - mysql
      - elasticsearch
      - gatling
      - cucumber


## 新手入门

### 学习官方示例
  - [安装yarn] (https://yarnpkg.com/zh-Hans/docs/install)
  - 安装jhipster生成器

    ```
    > yarn global add generator-jhipster
    ```

  - 安装YEOMAN | 初始化jhipster工程

    ```
    > mkdir jhipster && cd jhipster
    > yarn global add yo && yarn global add generator-jhipster && yo jhipster
    ```

    [说明]
    > 运行 `> yo jhipster` 时, 可参考[官方文档配置说明](https://jhipster.github.io/creating-an-app/)选择需要的第三方框架搭建
    > 我们推荐产品选择的框架参考根目录下文件: `.yo-rc.json`
    > 如果选择使用了elasticsearch2
      Mac 电脑需手动创建目录[因为在/usr/local/目录下需要sudo权限]

      ```
      > sudo mkdir /usr/local/elasticsearch2/ && sudo chmod -R 0777 /usr/local/elasticsearch2/
      ```

  - 新建数据库
    - 在Mysql数据库里新建数据库: bb

  - 运行示例
    - 初始化环境
    ```
    > yarn install
    ```

    - 分别在两个命令行工具运行以下指令，可使浏览器自动刷新查看到您最新的修改内容
    ```
    > ./mvnw
    > yarn start
    ```

    - 浏览器中运行: [http://localhost:8080](http://localhost:8080)
    - 浏览器里访问 [http://localhost:9000/#/](http://localhost:9000/#/)

  - [开发需知](https://jhipster.github.io/development/)
  - [简易教程](https://jhipster.github.io/creating-an-entity/)

### 配置开发环境

  - [IntelliJ IDEA](https://jhipster.github.io/configuring-ide-idea/)
  - [Sts](https://jhipster.github.io/configuring-ide-eclipse/)
  - [Maven](https://jhipster.github.io/configuring-ide-eclipse/)

## 发布

  - 优化运行生产环境下运行性能
  ```
  > ./mvnw -Pprod clean package
  ```

  - 确保正常运行
  ```  
  java -jar target/\*.war
  ```
  - 更多信息, 参考:[JHipster Production](https://jhipster.github.io/production/)

## 深入开发

###  Angular-cli

  使用 [Angular CLI] 生成自定义客户端代码

  - 例如使用以下代码

  ```
  > ng generate component my-component
  ```

  - 将生成以下代码文件

    创建文件: src/main/webapp/app/my-component/my-component.component.html
    创建文件: src/main/webapp/app/my-component/my-component.component.ts
    更新文件: src/main/webapp/app/app.module.ts

### 管理库依赖性

  - [Yarn] 也用来管理本应用用到的CSS 和 JavaScript库依赖.
  - 在[package.json](package.json)指定需要升级的CSS 和 JavaScript库新版本
  - 运行以下指令更新升级

  ```
  > yarn update
  > yarn install
  ```
  - 查看指令的帮助信息

  ```
  > yarn help update
  ```
  - 列出本应用所有可运行的yarn命令

  ```
  > yarn run
  ```
  - 举例
    - 添加[Leaflet]库作为应用运行期依赖, 可以运行以下指令
    ```
    > yarn add --exact leaflet
    ```

    - 在开发阶段希望使用TypeScript类型定义[DefinitelyTyped]资源库, 可以运行以下指令
    ```
    > yarn add --dev --exact @types/leaflet
    ```

    - 希望导入其它的JS和CSS库,可以编辑以下文件以便[Webpack]知道
      - [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:
      ~~~
      import 'leaflet/dist/leaflet.js';
      ~~~

      - [src/main/webapp/content/css/vendor.css](src/main/webapp/content/css/vendor.css) file:
      ~~~
      @import '~leaflet/dist/leaflet.css';
      ~~~
    - 更多信息, 参考:[Using JHipster in Development](https://jhipster.github.io/development/)


## 测试

  - 运行测试

  ```
  > ./mvnw clean test
  ```

### 客户端测试

  - 单元测试使用[Jasmine]写的[Karma]运行.
  - 测试文件放置在路径: [src/test/javascript/](src/test/javascript/)
  - 运行测试

  ```
  > yarn test
  ```

### 其它测试

  - 性能测试使用[Scala]编写的[Gatling].
  - 测试文件放置在路径: [src/test/gatling](src/test/gatling)
  - 运行测试

  ```
  > ./mvnw gatling:execute
  ```
  - 更多信息, 参考:[Running tests page](https://jhipster.github.io/running-tests/)

## 使用 Docker

  - 可以使用 Docker 提高JHipster开发体验.
  - 大量的 docker-compose 配置文件放置在目录 [src/main/docker](src/main/docker) 下以运行必需的第三方服务.
  - 示例
    - 在docker容器里启动mysql数据库,运行
    ```
    > docker-compose -f src/main/docker/mysql.yml up -d
    ```
    - 停止该服务并移除该容器,运行
    ```
    > docker-compose -f src/main/docker/mysql.yml down
    ```
    - 打包整个应用发布到docker环境下并运行
    ```
    > ./mvnw package -Pprod docker:build
    > docker-compose -f src/main/docker/app.yml up -d
    ```
    - 更多信息, 参考:[Docker-Compose](https://jhipster.github.io/docker-compose)

## CI

工程要配置 CI, 运行sub-generator: ci-cd (`yo jhipster:ci-cd`).

CI 参考: https://jhipster.github.io/setting-up-ci/

## 参考
  - [Jhipster Document]     : http://www.jhipster.cc/
  - [JHipster]              : https://jhipster.github.io
  - [JHipster Development]  : https://jhipster.github.io/development/
  - [Docker-Compose]        : https://jhipster.github.io/docker-compose
  - [JHipster Production]   : https://jhipster.github.io/production/
  - [Running tests page]    : https://jhipster.github.io/running-tests/
  - [Continuous Integration]: https://jhipster.github.io/setting-up-ci/

  - [Node.js]        : https://nodejs.org/
  - [Yarn]           : https://yarnpkg.org/
  - [Webpack]        : https://webpack.github.io/
  - [Angular CLI]    : https://cli.angular.io/
  - [BrowserSync]    : http://www.browsersync.io/

  - [Gatling]        : http://gatling.io/
  - [Karma]          : http://karma-runner.github.io/
  - [Jasmine]        : http://jasmine.github.io/2.0/introduction.html
  - [Protractor]     : https://angular.github.io/protractor/
  - [Leaflet]        : http://leafletjs.com/
  - [DefinitelyTyped]: http://definitelytyped.org/
