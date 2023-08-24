---
layout: post
title: Google Cloud搭建免费的SS
date: 2018-03-01
tags: 教程
---

#### 准备工作
1. 首先需要注册一个google账户，还需要一张visa信用卡（实际不会扣款）
2. [进入页面](https://cloud.google.com/)，点击右上角控制台

###### PS.需要注意一点的是Google Cloud只是针对新用户在第一年有300刀的优惠，第二年开始就要付费使用了

一、环境配置
1⃣️、修改防火墙

VPC网络 -> 防火墙规则 -> [创建防火墙](https://console.cloud.google.com/networking/firewalls/list)

***注意以下几点即可**
<p>
1.1. 目标：网络中所有的实例
1.2. 来源过滤：IP地址范围，并设置为0.0.0.0/0
1.3. 协议和端口：全部允许
</p>

<img src="https://static.oschina.net/uploads/space/2017/1224/010450_QY0n_924639.png" width="600" height="800">


2⃣️、申请静态IP

若长期使用，建议还是申请一个
VPC网络 -> 外部IP地址 -> [保留静态地址即添加](https://console.cloud.google.com/networking/addresses/list)

***注意以下几点即可***
<p>
区域：asia-east1
</p>

<img src="https://static.oschina.net/uploads/space/2017/1224/010600_PsvG_924639.png" width="600" height="800">

3⃣️、创建计算引擎

Computer Engine -> VM实例 -> [创建实例](https://console.cloud.google.com/compute/instances)


***注意以下几点即可***
<p>
地区：asia-east1-b
机器类型：微型，1个共享vCPU（0.6GB内存）
管理、磁盘、网络、SSH 密钥：打开，选择网络，选择之前申请的静态IP
</p>

<img src="https://static.oschina.net/uploads/space/2017/1224/010728_pEhQ_924639.png" width="600" height="800">

<img src="https://static.oschina.net/uploads/space/2017/1224/004435_Dgcy_924639.png" width="600" height="800">

待实例创建完成以后，服务器的搭建就完成了，现在需要通过SSH连接到服务器，安装软件了。其实很简单，只需要粘贴几行代码即可。

二、安装ShadowsocksR

1⃣️、通过SSH连接到服务器

<img src="https://static.oschina.net/uploads/space/2017/1224/004459_hZxc_924639.png" width="600" height="800">


切换到root，输入命令 

``sudo -i``

2⃣️、下载并安装ShadowsocksR软件

#### 下载hadowsocksR包

``wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh``

#### 增加执行权限

``chmod +x shadowsocksR.sh``

#### 安装并写入日志

``./shadowsocksR.sh 2>&1 | tee shadowsocksR.log``


依次复制以上命令，粘贴到命令行执行即可

***PS.注意以下几点***

1. 安装途中首先会提示需要输入ss的连接密码，不推荐留空（如果留空回车，密码则是提示里的teddysun.com）
2. 当安装完成，会在页面显示IP, Password, Protocol等信息，需要全部保存。

三、启用BBR

1⃣️、写入配置

``echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo"net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf``


2⃣️、配置生效

```sysctl -p```

3⃣️、检验

```lsmod | grep bbr```

看到返回值 tcp_bbr 20480 0 说明已经成功开启 BBR

***Ps.不需要重新启动***

### ***<至此已安装完成！！！>***

-------

网上很多文章都是写到这里就结束了，等于说此时我们已经有了一个ss服务器，可如何让我们的电脑，手机端通过这个ss服务器上网了，我也是找了很多资料才完成的，这也正是我写这篇帖子的初衷，希望有一个完整的教程。

-------

#### mac连接ss服务器上网

在mac电脑上下载ss客户端
[下载页面：https://github.com/shadowsocks/shadowsocks-iOS/releases/latest](https://github.com/shadowsocks/shadowsocks-iOS/releases/latest)

[下载地址：https://github.com/shadowsocks/shadowsocks-iOS/releases/download/2.6.3/ShadowsocksX-2.6.3.dmg](https://github.com/shadowsocks/shadowsocks-iOS/releases/download/2.6.3/ShadowsocksX-2.6.3.dmg)

#### 在客户端添加ss服务器信息

安装好以后打开软件，添加一个服务器，信息照着之前的输入即可

<img src="https://static.oschina.net/uploads/space/2017/1224/005455_3vfp_924639.png">



#  注

  >* ⚠️ [转载请注明原博客地址【https://yanhuiandy.github.io】Andy所作,谢谢合作！](https://yanhuiandy.github.io/)


