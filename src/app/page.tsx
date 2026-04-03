'use client';

import { useState } from 'react';
import { 
  Server, 
  Shield, 
  Crown, 
  Zap, 
  Users, 
  Globe, 
  Database,
  Cpu,
  Lock,
  Rocket,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 产品数据
  const products = {
    special: [
      {
        name: '特价空间A型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '100M' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送10M Mysql' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '1%' },
          { label: '子域名', value: '可绑定1个' },
        ],
        price: 20,
        popular: false
      },
      {
        name: '特价空间B型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '200M' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送20M Mysql' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '2%' },
          { label: '子域名', value: '可绑定2个' },
        ],
        price: 40,
        popular: false
      },
      {
        name: '特价空间C型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '300M' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送30M Mysql' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '3%' },
          { label: '子域名', value: '可绑定3个' },
        ],
        price: 60,
        popular: false
      },
      {
        name: '特价空间D型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '500M' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送50M Mysql' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '5%' },
          { label: '子域名', value: '可绑定5个' },
        ],
        price: 100,
        popular: true
      }
    ],
    hongkong: [
      {
        name: '香港空间A型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '2GB' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送200M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '5%' },
          { label: '子域名', value: '可绑定5个' },
        ],
        price: 200,
        popular: false
      },
      {
        name: '香港空间B型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '4GB' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送400M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '10%' },
          { label: '子域名', value: '可绑定10个' },
        ],
        price: 400,
        popular: true
      },
      {
        name: '香港空间C型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '6GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送600M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '15%' },
          { label: '子域名', value: '可绑定15个', highlight: '支持SSL证书' },
        ],
        price: 600,
        popular: false
      }
    ],
    highDefense: [
      {
        name: '高防空间A型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '2GB' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送200M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '5%' },
          { label: '防御能力', value: '10G防护' },
        ],
        price: 300,
        popular: false
      },
      {
        name: '高防空间B型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '4GB' },
          { label: '支持脚本', value: 'ASP、PHP' },
          { label: 'SQL数据库', value: '赠送400M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '10%' },
          { label: '防御能力', value: '20G防护' },
        ],
        price: 600,
        popular: false
      },
      {
        name: '高防空间C型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '6GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送600M Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '15%' },
          { label: '防御能力', value: '30G防护', highlight: '支持SSL证书' },
        ],
        price: 900,
        popular: true
      },
      {
        name: '高防空间D型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '10GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送1GB Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '20%' },
          { label: '防御能力', value: '50G防护', highlight: '支持SSL证书' },
        ],
        price: 1500,
        popular: false
      }
    ],
    gold: [
      {
        name: '金牌空间A型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '20GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送2GB Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '20%' },
          { label: '子域名', value: '可绑定20个', highlight: '支持SSL证书' },
        ],
        price: 2000,
        popular: false
      },
      {
        name: '金牌空间B型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '40GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送4GB Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '30%' },
          { label: '子域名', value: '可绑定30个', highlight: '支持SSL证书' },
        ],
        price: 4000,
        popular: false
      },
      {
        name: '金牌空间C型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '60GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送6GB Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '40%' },
          { label: '子域名', value: '可绑定40个', highlight: '支持SSL证书' },
        ],
        price: 6000,
        popular: false
      },
      {
        name: '金牌空间D型',
        specs: [
          { label: '操作系统', value: 'Win2025操作系统 IIS10.0' },
          { label: '空间大小', value: '100GB' },
          { label: '支持脚本', value: 'ASP、PHP、.NET' },
          { label: 'SQL数据库', value: '赠送10GB Mysql/MSSQL' },
          { label: '流量限制', value: '不限制' },
          { label: 'IIS连接数', value: '不限制' },
          { label: '支持组件', value: 'Zend Rewrite Gzip等' },
          { label: 'CPU占用', value: '60%' },
          { label: '子域名', value: '可绑定60个', highlight: '支持SSL证书' },
        ],
        price: 10000,
        popular: true
      }
    ]
  };

  // 优势数据
  const advantages = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: '弹性扩展',
      description: '采用分布式集群存储，实时备份、主机热迁移，互相兼容支持。有效降低硬件故障风险。'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'VIP专属服务',
      description: '强大专业的专属团队为您提供一对一服务，全程保障安全，根据您的需求制定安全解决方案，提升企业客户VIP体验。'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '全程高防节点',
      description: '多节点部署，智能负载均衡，保障业务稳定运行。提供全方位的安全防护。'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '全球加速',
      description: '全球节点覆盖，CDN加速，让您的网站访问更快更稳定。'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: '数据安全',
      description: '多重备份机制，数据加密存储，确保您的数据安全无忧。'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: '高性能配置',
      description: '最新硬件配置，高速SSD硬盘，让您的网站运行如飞。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                香港云主机
              </span>
            </div>
            
            {/* 桌面导航 */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">首页</a>
              <a href="#tj" className="text-slate-300 hover:text-white transition-colors">特价空间</a>
              <a href="#hk" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                香港空间
                <Badge variant="secondary" className="bg-red-500 text-white hover:bg-red-600 text-xs">推荐</Badge>
              </a>
              <a href="#gf" className="text-slate-300 hover:text-white transition-colors">高防空间</a>
              <a href="#gold" className="text-slate-300 hover:text-white transition-colors">金牌空间</a>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                会员登录
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* 移动端导航 */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">首页</a>
              <a href="#tj" className="block text-slate-300 hover:text-white transition-colors">特价空间</a>
              <a href="#hk" className="block text-slate-300 hover:text-white transition-colors">香港空间</a>
              <a href="#gf" className="block text-slate-300 hover:text-white transition-colors">高防空间</a>
              <a href="#gold" className="block text-slate-300 hover:text-white transition-colors">金牌空间</a>
              <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                会员登录
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2250%22 height=%2250%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 50 0 L 0 0 0 50%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-30" />
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              <Sparkles className="mr-2 h-4 w-4" />
              2026新年特惠
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              CloudHost / Hosting
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
              特价空间 / 香港空间 / 高防空间 / 金牌空间
            </p>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              2026新年特惠：香港特价空间，100M容量，支持ASP、PHP、MYSQL，仅需
              <span className="text-3xl font-bold text-green-400 mx-2">20元</span>
              ，可永久使用！
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                立即选购
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="special" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-slate-900/50 p-2">
              <TabsTrigger value="special" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600">
                <Zap className="mr-2 h-4 w-4" />
                特价空间
              </TabsTrigger>
              <TabsTrigger value="hongkong" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600">
                <Globe className="mr-2 h-4 w-4" />
                香港空间
              </TabsTrigger>
              <TabsTrigger value="highDefense" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600">
                <Shield className="mr-2 h-4 w-4" />
                高防空间
              </TabsTrigger>
              <TabsTrigger value="gold" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600">
                <Crown className="mr-2 h-4 w-4" />
                金牌空间
              </TabsTrigger>
            </TabsList>

            <TabsContent value="special">
              <ProductGrid products={products.special} />
            </TabsContent>
            <TabsContent value="hongkong">
              <ProductGrid products={products.hongkong} />
            </TabsContent>
            <TabsContent value="highDefense">
              <ProductGrid products={products.highDefense} />
            </TabsContent>
            <TabsContent value="gold">
              <ProductGrid products={products.gold} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 产品优势 */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              产品优势
            </h2>
            <p className="text-xl text-slate-400">
              为什么选择我们的云主机服务？
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-200">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="py-16 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                准备好开始了吗？
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                选择最适合您的云主机套餐，立即开始您的在线之旅
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                <Rocket className="mr-2 h-5 w-5" />
                立即购买
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-slate-200">香港云主机</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">
                在线咨询QQ：{' '}
                <a 
                  href="tencent://message/?uin=616909090&&Site=www.3v.do&&Menu=yes"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  616909090
                </a>
              </p>
              <p className="text-slate-500 text-sm">
                Copyright © 2020-2026 香港云主机 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 产品网格组件
function ProductGrid({ products }: { products: Array<any> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

// 产品卡片组件
function ProductCard({ product }: { product: any }) {
  return (
    <Card className={`relative bg-slate-900/50 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      product.popular 
        ? 'border-blue-500 shadow-lg shadow-blue-500/10' 
        : 'border-slate-800 hover:border-blue-500/50'
    }`}>
      {product.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Star className="mr-1 h-3 w-3" />
            推荐
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl text-slate-200">{product.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center py-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/20">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ¥{product.price}
          </div>
          <div className="text-sm text-slate-400 mt-2">永久使用</div>
        </div>
        
        <ul className="space-y-3">
          {product.specs.map((spec: any, specIndex: number) => (
            <li key={specIndex} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-slate-400">{spec.label}：</span>
                <span className="text-slate-200 ml-1">{spec.value}</span>
                {spec.highlight && (
                  <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    {spec.highlight}
                  </Badge>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          size="lg"
        >
          立即购买
        </Button>
      </CardFooter>
    </Card>
  );
}
