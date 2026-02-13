import { Shield, BarChart3, GraduationCap, FileText, BookOpen, Target, Search, Settings, Clock, Users } from 'lucide-react';
import { NavItem, NavItemStatus, SlideData, TimelineStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'proposal', label: 'دفاع از پروپوزال', icon: Shield, status: NavItemStatus.ACTIVE },
  { id: 'report', label: 'گزارش شش‌ماهه', icon: BarChart3, status: NavItemStatus.COMING_SOON },
  { id: 'defense', label: 'دفاع نهایی / تز', icon: GraduationCap, status: NavItemStatus.COMING_SOON },
  { id: 'article', label: 'نگارش مقاله', icon: FileText, status: NavItemStatus.COMING_SOON },
];

export const PROPOSAL_SLIDES: SlideData[] = [
  { id: 1, slideRange: 'اسلاید ۱', topic: 'عنوان و تیم تحقیق', duration: '۱ دقیقه', keyNotes: 'معرفی کوتاه، شفاف و حرفه‌ای' },
  { id: 2, slideRange: 'اسلاید ۲-۴', topic: 'بیان مسئله و ضرورت', duration: '۵ دقیقه', keyNotes: 'چرا این تحقیق مهم است؟ چه خلأیی وجود دارد؟' },
  { id: 3, slideRange: 'اسلاید ۵', topic: 'اهداف و فرضیات', duration: '۳ دقیقه', keyNotes: 'اهداف اصلی و فرعی + سوالات تحقیق' },
  { id: 4, slideRange: 'اسلاید ۶-۷', topic: 'مرور ادبیات و نوآوری', duration: '۳ دقیقه', keyNotes: 'کارهای قبلی چه بود؟ شما چه چیز جدیدی دارید؟' },
  { id: 5, slideRange: 'اسلاید ۸-۱۵', topic: 'روش‌شناسی و گام‌های اجرایی', duration: '۱۲ دقیقه', keyNotes: 'حیاتی‌ترین بخش: دقیق، گام‌به‌گام و علمی' },
  { id: 6, slideRange: 'اسلاید ۱۶-۱۸', topic: 'زمان‌بندی و منابع', duration: '۱ دقیقه', keyNotes: 'نمودار گانت و لیست منابع کلیدی' },
  { id: 7, slideRange: 'اسلاید ۱۹', topic: 'پرسش و پاسخ', duration: '۵ دقیقه', keyNotes: 'آمادگی برای دفاع از متدولوژی' },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { title: 'مقدمه و کلیات', description: 'ورود قدرتمند با بیان مسئله', icon: BookOpen },
  { title: 'اهداف و ضرورت', description: 'توجیه علمی و کاربردی تحقیق', icon: Target },
  { title: 'روش‌شناسی', description: 'تشریح دقیق ابزارها و روش تحلیل', icon: Settings },
  { title: 'برنامه اجرایی', description: 'زمان‌بندی و خروجی‌های مورد انتظار', icon: Clock },
];