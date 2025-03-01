---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "小叶的技术博客"
  text: "文档记录"
  tagline: 记录学习，记录经历
  image:
    src: /logo/logo3.png
    alt: VitePress
  actions:
    - theme: brand
      text: 个人简历
      link: /resume
    - theme: alt
      text: Java 技术栈
      link: /InterviewQuestion/SpringCloud

features:
  - icon: 💛
    title: 学生教育管理系统（Spring Boot + Vue3 + Redis + MyBatis + Shiro）
    details: 包含 EPC 金税、RPA 机器人应用与开发、纳税筹划综合教学平台、全税种教学实训平台、智能审计实践教学平台、智能出题系统、财务云等多个项目的项目开发包括学生端、教师端、以及管理端，系统多用于教学智能会计领为师生提供全面的在线学习与管理体验
    link: "projects/EDC"
  - icon: 💜
    title: 高并发电商系统 (Spring Cloud + Elasticsearch + RabbitMQ + Docker)
    details: 网上积分商城项目是一个基于SOA架构一共分为二十多个项目的微服务的在线商城系统 ，包括前台商城系统及后台管理系统 。
    link: "projects/B2C"
  - icon: 💚
    title: 客户关系管理系统(Spring Boot + ELK + RSA + Nginx)
    details: 客户关系管理项目包含用户信息概览(用户交易账号、身份地址验证情况)、用户个人资金(余额及适用情况)、用户交易 (出金、入金)、用户交易订单详情等模块。
    link: "projects/CRM"
---
