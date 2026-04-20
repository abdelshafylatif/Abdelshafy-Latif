/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Utensils, 
  GlassWater, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2,
  Menu,
  X,
  Hotel,
  Wine,
  ChefHat
} from "lucide-react";
import { trainingModules, TrainingModule, Lesson, ContentBlock } from "./data/trainingContent";

const iconMap = {
  Utensils: <Utensils className="w-6 h-6" />,
  GlassWater: <GlassWater className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Wine: <Wine className="w-6 h-6" />,
  ChefHat: <ChefHat className="w-6 h-6" />
};

type Language = 'ar' | 'en';

function BlockRenderer({ block, lang }: { block: ContentBlock; lang: Language }) {
  const isEn = lang === 'en';
  
  switch (block.type) {
    case 'title':
      const title = isEn ? (block.titleEn || block.title) : block.title;
      return <h3 className="text-xl font-serif text-gold mt-12 mb-6 border-r-4 border-gold pr-4">{title}</h3>;
    case 'paragraph':
      const text = isEn ? (block.textEn || block.text) : block.text;
      return <p className={`font-arabic text-white/80 leading-[2.2] mb-6 text-lg ${isEn ? 'font-sans' : ''}`}>{text}</p>;
    case 'list':
      const items = isEn ? (block.itemsEn || block.items) : block.items;
      return (
        <ul className="space-y-4 mb-8">
          {items?.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 text-lg text-white/70 ${isEn ? 'font-sans' : 'font-arabic'}`}>
              <span className="text-gold font-serif mt-1">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {block.gridItems?.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-5 flex flex-col gap-2 hover:bg-white/[0.08] transition-all">
              <span className="text-gold font-serif text-xs uppercase tracking-widest border-b border-gold/20 pb-1 mb-1">
                {isEn ? (item.labelEn || item.label) : item.label}
              </span>
              <span className={`text-white/70 text-md leading-relaxed ${isEn ? 'font-sans' : 'font-arabic'}`}>
                {isEn ? (item.valueEn || item.value) : item.value}
              </span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

const uiStrings = {
  ar: {
    program: "برنامج التدريب الاحترافي",
    home: "الرئيسية",
    restaurants: "المطاعم",
    bars: "البارات",
    focus: "التركيز الحالي للتدريب",
    allInclusive: "معايير نظام \"الأول إنكلوزيف\"",
    methodology: "\"منهجية علمية للعمليات اليومية في المنتجعات الفاخرة.\"",
    checkList: "قائمة التدقيق اليومية",
    checklistItems: ["معايير الهندام واليونيفورم", "بروتوكول تجهيز المحطات", "إتيكيت التواصل المهني"],
    selectSpecialty: "اختر تخصصك المهني",
    curriculum: "المناهج المتاحة",
    backToHome: "العودة للرئيسية",
    enterTraining: "دخول التدريب",
    additionalLessons: "دروس إضافية",
    selectLesson: "اختر فصلاً دراسياً",
    protocols: "برجاء اختيار أحد الدروس من القائمة الجانبية لعرض البروتوكولات العلمية المعتمدة.",
    proTips: "نصائح احترافية",
    by: "محتوى تدريبي مبسط من تنفيذ"
  },
  en: {
    program: "PROFESSIONAL TRAINING PROGRAM",
    home: "HOME",
    restaurants: "RESTAURANTS",
    bars: "BARS",
    focus: "CURRENT TRAINING FOCUS",
    allInclusive: "\"ALL-INCLUSIVE\" STANDARDS",
    methodology: "SCIENTIFIC DAILY OPERATIONS METHODOLOGY FOR LUXURY RESORTS.",
    checkList: "DAILY CHECKLIST",
    checklistItems: ["Grooming & Uniform", "Station Setup", "Professional Etiquette"],
    selectSpecialty: "SELECT YOUR SPECIALTY",
    curriculum: "AVAILABLE CURRICULUM",
    backToHome: "BACK TO HOME",
    enterTraining: "ENTER TRAINING",
    additionalLessons: "Additional Lessons",
    selectLesson: "SELECT A LESSON",
    protocols: "Please select a lesson from the sidebar to view protocols.",
    proTips: "PROFESSIONAL GUIDELINES",
    by: "Simplified Training Content by"
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const isEn = lang === 'en';
  const t = uiStrings[lang];
  
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModuleSelect = (module: TrainingModule) => {
    setSelectedModule(module);
    setSelectedLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 bg-dark-bg selection:bg-gold selection:text-dark-bg ${isEn ? 'ltr' : 'rtl'}`}>
      <style>{`
        .ltr { direction: ltr; }
        .rtl { direction: rtl; }
      `}</style>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark-bg border-b border-white/10 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-end gap-4 text-left">
          <div 
            className="flex flex-col cursor-pointer group text-right" 
            onClick={() => handleBackToModules()}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-1">
              {t.program} <span className="text-white/20 ml-2">/ PROFESSIONAL TRAINING</span>
            </span>
            <div className="flex items-start gap-3 justify-end italic">
              <div className="flex flex-col items-end">
                <h1 className="text-xl md:text-2xl font-serif text-white/90 leading-tight">
                  {t.by}
                </h1>
                <h2 className="text-3xl md:text-4xl font-serif text-gold leading-tight tracking-wide">
                  عبدالشافى <span className="text-[14px] text-white/20 not-italic uppercase tracking-[0.2em] ml-2">Abdelshafy</span>
                </h2>
              </div>
              <Hotel className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform mt-1" />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-white/5 p-1 rounded-full border border-white/10">
              <button 
                onClick={(e) => { e.stopPropagation(); setLang('ar'); }}
                className={`px-4 py-1.5 rounded-full text-[10px] transition-all ${!isEn ? 'bg-gold text-black font-bold' : 'text-white/40 hover:text-white'}`}
              >
                عربي
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                className={`px-4 py-1.5 rounded-full text-[10px] transition-all ${isEn ? 'bg-gold text-black font-bold' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-white/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className={`hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-white/50 ${isEn ? 'font-sans' : 'font-arabic'}`}>
              <button 
                onClick={() => handleBackToModules()} 
                className={`pb-1 transition-all ${!selectedModule ? 'text-gold border-b border-gold' : 'hover:text-white'}`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => handleModuleSelect(trainingModules[0])} 
                className={`pb-1 transition-all ${selectedModule?.id === 'restaurant' ? 'text-gold border-b border-gold' : 'hover:text-white'}`}
              >
                {t.restaurants}
              </button>
              <button 
                onClick={() => handleModuleSelect(trainingModules[1])} 
                className={`pb-1 transition-all ${selectedModule?.id === 'bar' ? 'text-gold border-b border-gold' : 'hover:text-white'}`}
              >
                {t.bars}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 py-12">
        <AnimatePresence mode="wait">
          {!selectedModule ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Sidebar Info */}
              <aside className={`lg:col-span-3 space-y-12 border-white/5 ${isEn ? 'border-r pr-8 text-left' : 'border-l pl-8 text-right'} hidden lg:block`}>
                <div>
                  <p className="text-[11px] uppercase text-white/40 mb-4 tracking-tight">{t.focus}</p>
                  <h2 className="text-xl font-serif mb-2 leading-tight text-white">{t.allInclusive}</h2>
                  <p className="text-sm text-white/60 leading-relaxed italic">{t.methodology}</p>
                </div>
                
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 ${isEn ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-sm text-white/80">الغردقة - Hurghada Active</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isEn ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-sm text-white/80">شرم الشيخ - Sharm Active</span>
                  </div>
                </div>

                <div className="bg-white/5 p-6 border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-3">{t.checkList}</p>
                  <ul className="text-[12px] space-y-3 text-white/70">
                    {t.checklistItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">• {item}</li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Modules Grid */}
              <div className="lg:col-span-9 space-y-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <h3 className="text-sm uppercase tracking-widest text-white/40">
                    {t.selectSpecialty}
                  </h3>
                  <div className="text-[10px] bg-white/10 px-2 py-1 text-white/60 uppercase">MODULES REV. 2024.B</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pb-6">
                  {trainingModules.map((module, idx) => (
                    <motion.div
                      key={module.id}
                      whileHover={{ borderColor: "rgba(160, 140, 91, 0.5)" }}
                      onClick={() => handleModuleSelect(module)}
                      className="group relative border border-white/10 bg-dark-surface p-10 flex flex-col justify-between transition-all cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 p-6 text-[40px] font-serif text-white/5 opacity-20 pointer-events-none">
                        0{idx + 1}
                      </div>
                      <div className={isEn ? 'text-left' : 'text-right'}>
                        <div className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold mb-6 ${isEn ? 'mr-auto' : 'ml-auto'}`}>
                          {iconMap[module.icon as keyof typeof iconMap]}
                        </div>
                        <h4 className="text-2xl font-serif text-gold mb-2">
                          {isEn ? (module.titleEn || module.title) : module.title}
                        </h4>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-8">Professional Training Series</p>
                        
                        <p className="text-sm text-white/60 mb-6 leading-relaxed">
                          {isEn ? (module.descriptionEn || module.description) : module.description}
                        </p>

                        <ul className="space-y-3 text-sm text-white/70">
                          {module.lessons.slice(0, 3).map(lesson => (
                             <li key={lesson.id} className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="truncate max-w-[200px]">{isEn ? (lesson.titleEn || lesson.title) : lesson.title}</span>
                             </li>
                          ))}
                          {module.lessons.length > 3 && (
                            <li className="text-[10px] text-gold/50 italic">+ {module.lessons.length - 3} {t.additionalLessons}</li>
                          )}
                        </ul>
                      </div>
                      <button className="w-full py-4 border border-white/10 text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition-all mt-10">
                        {t.enterTraining}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="lessons"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-12"
            >
              {/* Sidebar Navigation */}
              <aside className={`lg:col-span-1 space-y-6 ${isEn ? 'text-left' : 'text-right'}`}>
                <button 
                  onClick={handleBackToModules}
                  className={`flex items-center gap-2 text-white/40 hover:text-gold mb-8 transition-colors text-xs uppercase tracking-widest ${isEn ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <ChevronRight className={`w-4 h-4 ${isEn ? 'rotate-180' : ''}`} /> 
                  <span>{t.backToHome}</span>
                </button>
                
                <div className="space-y-2">
                  <h2 className="text-[10px] uppercase tracking-widest text-gold mb-4 font-semibold">
                    {t.curriculum}
                  </h2>
                  {selectedModule.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full p-5 border transition-all flex items-center justify-between ${isEn ? 'flex-row' : 'flex-row-reverse'} ${
                        selectedLesson?.id === lesson.id 
                          ? "bg-white text-black border-white" 
                          : "bg-dark-surface border-white/5 text-white/60 hover:border-gold/50"
                      }`}
                    >
                      <span className="text-sm">
                        {isEn ? (lesson.titleEn || lesson.title) : lesson.title}
                      </span>
                      <BookOpen className="w-4 h-4 opacity-30 shrink-0" />
                    </button>
                  ))}
                </div>
              </aside>

              {/* Lesson Content Area */}
              <div className="lg:col-span-3">
                {selectedLesson ? (
                  <motion.div 
                    key={selectedLesson.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-dark-surface border border-white/10 p-8 md:p-16 space-y-10"
                  >
                    <header className={`space-y-6 ${isEn ? 'text-left' : 'text-right'}`}>
                      <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                        {isEn ? (selectedModule.titleEn || selectedModule.title) : selectedModule.title}
                      </div>
                      <h1 className="text-4xl md:text-5xl font-serif text-white italic">
                        {isEn ? (selectedLesson.titleEn || selectedLesson.title) : selectedLesson.title}
                      </h1>
                      <div className={`h-px w-32 bg-gold/30 ${isEn ? 'mr-auto' : 'ml-auto'}`} />
                    </header>

                    <div className="max-w-none">
                      {selectedLesson.blocks.map((block: ContentBlock, idx: number) => (
                        <div key={idx}>
                          <BlockRenderer block={block} lang={lang} />
                        </div>
                      ))}
                    </div>

                    <div className={`bg-white/5 border-gold p-10 space-y-8 ${isEn ? 'border-l-2' : 'border-r-2'}`}>
                      <h3 className={`text-sm uppercase tracking-[0.3em] text-gold flex items-center gap-3 ${isEn ? 'flex-row' : 'flex-row-reverse'}`}>
                        {t.proTips}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(isEn ? (selectedLesson.tipsEn?.length ? selectedLesson.tipsEn : selectedLesson.tips) : selectedLesson.tips).map((tip, idx) => (
                          <li key={idx} className={`flex items-start gap-4 text-md text-white/60 italic ${isEn ? 'flex-row' : 'flex-row-reverse'}`}>
                            <span className="text-gold font-serif">0{idx+1}/</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-20 text-center space-y-8 border border-white/5 bg-white/[0.02]">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white/20" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-serif italic text-white/80">{t.selectLesson}</h3>
                      <p className="text-sm text-white/30 max-w-xs leading-relaxed">
                        {t.protocols}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`border-t border-white/5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em] font-sans py-10 gap-6 ${isEn ? 'ltr' : 'rtl'}`}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <span className="text-gold/50 font-semibold tracking-[0.4em]">عبدالشافى / ABDELSHAFY</span>
          <div className="h-px w-8 bg-white/10 hidden md:block" />
          <span>Red Sea Hospitality Engine</span>
        </div>
        <div className="text-center md:text-right italic">
          بكل فخر من أجل تطوير السياحة المصرية
          <span className="block mt-1 opacity-50 not-italic font-sans text-[8px]">Developed for Egyptian Tourism Excellence</span>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] bg-dark-bg text-ink p-12 flex flex-col ${isEn ? 'ltr' : 'rtl'}`}
          >
            <div className={`flex justify-between items-center mb-12 ${isEn ? 'flex-row' : 'flex-row-reverse'}`}>
               <X className="w-8 h-8 text-gold cursor-pointer" onClick={() => setIsMenuOpen(false)} />
               <Hotel className="w-8 h-8 text-gold" />
            </div>
            
            <div className="flex justify-center mb-8 gap-4">
              <button 
                 onClick={() => setLang('ar')}
                 className={`px-6 py-2 rounded-full text-xs ${!isEn ? 'bg-gold text-black font-bold' : 'bg-white/5 text-white/40'}`}
              >
                عربي
              </button>
              <button 
                 onClick={() => setLang('en')}
                 className={`px-6 py-2 rounded-full text-xs ${isEn ? 'bg-gold text-black font-bold' : 'bg-white/5 text-white/40'}`}
              >
                ENGLISH
              </button>
            </div>

            <div className="flex flex-col gap-10 text-2xl font-serif italic items-center justify-center flex-1">
              <button 
                onClick={() => { handleBackToModules(); setIsMenuOpen(false); }}
                className="hover:text-gold transition-colors"
              >
                {t.home}
              </button>
              {trainingModules.map((module) => (
                <button 
                  key={module.id}
                  onClick={() => { handleModuleSelect(module); setIsMenuOpen(false); }}
                  className="hover:text-gold transition-colors"
                >
                  {isEn ? (module.titleEn || module.title) : module.title.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
