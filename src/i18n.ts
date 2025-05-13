
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  appTitle: 'EcoSupply Tracker',
  dashboardTitle: 'Sustainable Supply Chain Dashboard',
  dashboardDescription: 'Monitor carbon emissions, track supplier sustainability, and identify optimization opportunities',
  searchPlaceholder: 'Search suppliers, products, locations...',
  exportReport: 'Export Report',
  addSupplier: 'Add Supplier',
  // Navigation
  dashboard: 'Dashboard',
  supplyChainMap: 'Supply Chain Map',
  inventory: 'Inventory',
  logistics: 'Logistics',
  suppliers: 'Suppliers',
  reports: 'Reports',
  carbonFootprint: 'Carbon Footprint',
  sustainability: 'Sustainability',
  compliance: 'Compliance',
  settings: 'Settings',
  // Map
  mapTitle: 'Supply Chain Map',
  interactiveMapTitle: 'Interactive Supply Chain Map',
  mapDescription: 'Shows 7 suppliers across North America',
  rawMaterials: 'Raw Materials',
  manufacturing: 'Manufacturing',
  distribution: 'Distribution',
  // Metrics
  carbonFootprintOverview: 'Carbon Footprint Overview',
  totalCarbonEmissions: 'Total Carbon Emissions',
  transportEmissions: 'Transport Emissions',
  emissionsByCategory: 'Emissions by Category',
  // Supplier scorecard
  supplierSustainabilityScores: 'Supplier Sustainability Scores',
  // Emission recommendations
  emissionReductionRecommendations: 'Emission Reduction Recommendations',
  actions: 'Actions',
  highImpact: 'High Impact',
  mediumImpact: 'Medium Impact',
  lowImpact: 'Low Impact',
  timeline: 'Timeline',
  details: 'Details',
  // Emissions Chart
  emissionsTrend: 'Emissions Trend (2023)',
  transportation: 'Transportation',
  facilities: 'Facilities',
  // Language
  language: 'Language',
  english: 'English',
  chinese: 'Chinese',
};

// Chinese translations
const zhTranslations = {
  appTitle: '生态供应链跟踪器',
  dashboardTitle: '可持续供应链控制面板',
  dashboardDescription: '监控碳排放，跟踪供应商可持续性，并识别优化机会',
  searchPlaceholder: '搜索供应商、产品、位置...',
  exportReport: '导出报告',
  addSupplier: '添加供应商',
  // Navigation
  dashboard: '控制面板',
  supplyChainMap: '供应链地图',
  inventory: '库存',
  logistics: '物流',
  suppliers: '供应商',
  reports: '报告',
  carbonFootprint: '碳足迹',
  sustainability: '可持续性',
  compliance: '合规性',
  settings: '设置',
  // Map
  mapTitle: '供应链地图',
  interactiveMapTitle: '互动供应链地图',
  mapDescription: '显示北美7个供应商',
  rawMaterials: '原材料',
  manufacturing: '制造',
  distribution: '分销',
  // Metrics
  carbonFootprintOverview: '碳足迹概览',
  totalCarbonEmissions: '总碳排放量',
  transportEmissions: '运输排放量',
  emissionsByCategory: '按类别排放',
  // Supplier scorecard
  supplierSustainabilityScores: '供应商可持续性评分',
  // Emission recommendations
  emissionReductionRecommendations: '减排建议',
  actions: '行动',
  highImpact: '高影响',
  mediumImpact: '中等影响',
  lowImpact: '低影响',
  timeline: '时间表',
  details: '详情',
  // Emissions Chart
  emissionsTrend: '排放趋势 (2023)',
  transportation: '运输',
  facilities: '设施',
  // Language
  language: '语言',
  english: '英语',
  chinese: '中文',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      zh: {
        translation: zhTranslations
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
