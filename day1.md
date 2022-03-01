public文件夹：一般放置一些静态资源，需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。

src文件夹（程序员源代码文件夹）：
    assets文件夹：一般放置一些静态资源（一般放置多个组件共用的静态资源），需要注意，放在assets文件夹中的静态资源，webpack进行打包的时候，会把静态资源当作一个模块，包到js文件中。

    components文件夹：一般放置的是非路由组件（全局组件）

    App.vue：唯一的根组件
    mian.js：程序入口文件

babel.config.js：配置文件

package.json文件：认为项目‘身份证’，记录项目叫做什么、项目中有哪些依赖、项目怎么运行。

项目配置：
    1.eslint校验功能关闭
    --在根目录下，创建一个vue.config.js文件
    比如：声明一个变量但是未使用eslint校验工具报错

    2.src文件夹简写方法，配置别名。@
    因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
    创建jsconfig.json文件
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                "@/*": [
                    "src/*"
                ]
            }
        },
        "exclude": [
            "node_modules",
            "dist"
        ]
    }

    3.项目路由的分析
    前端所谓路由：KV键值对。
    K即为URL（网络资源定位符）
    V即为相应的路由组件


    3.1路由的一个分析
    确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
    2个非路由组件|四个路由组件
    两个非路由组件：Header 、Footer
    路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）

    3.2安装路由
    cnpm install --save vue-router 
    --save:可以让你安装的依赖，在package.json文件当中进行记录
    3.3创建路由组件【一般放在views|pages文件夹】
    3.4配置路由，配置完四个路由组件

    路由的一个分析
    确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
    2个非路由组件|四个路由组件
    两个非路由组件：Header 、Footer
    路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）
    创建路由组件【一般放在views|pages文件夹】

    总结
    路由组件与非路由组件的区别：
    1、路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹
    2、路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用
    3、注册完路由，不管是路由组件还是非路由组件身上都有$route $router 属性

    $route:一般获取路由信息【路径、query、params】
    $router：一般进行编程式导航进行路由跳转【push|replace】

    路由的跳转
    路由的跳转就两种形式：声明式导航（router-link：务必要有to属性）
                        编程式导航push||replace
    编程式导航更好用：因为可以书写自己的业务逻辑

    v-show与v-if区别?
    v-show:通过样式display控制
    v-if：通过元素上树与下树进行操作
    面试题:开发项目的时候，优化手段有哪些?
    1:v-show|v-if
    2:按需加载
    首页|搜索底部是有Footer组件，而登录注册是没有Footer组件
    Footer组件显示|隐藏，选择v-show|v-if

    我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏
    配置路由的时候，可以给路由添加路由元信息【mata】，路由需要配置对象，他的key不能乱写

    路由传参
    params参数：路由需要占位，程序就崩了，属于URL当中一部分
    query参数：路由不需要占位，写法类似于ajax当中query参数
    路由传递参数先关面试题
     1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
     不可以：不能这样书写，程序会崩掉
     2:如何指定params参数可传可不传? 
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
     4:如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
     5: 路由组件能不能传递props数据?    