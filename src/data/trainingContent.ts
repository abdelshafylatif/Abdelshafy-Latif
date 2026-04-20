/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContentBlock {
  type: 'paragraph' | 'list' | 'grid' | 'title';
  text?: string;
  textEn?: string;
  title?: string;
  titleEn?: string;
  items?: string[];
  itemsEn?: string[];
  gridItems?: { label: string; value: string; labelEn?: string; valueEn?: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  titleEn?: string;
  blocks: ContentBlock[];
  tips: string[];
  tipsEn?: string[];
}

export interface TrainingModule {
  id: string;
  title: string;
  titleEn?: string;
  icon: string;
  description: string;
  descriptionEn?: string;
  lessons: Lesson[];
}

export const trainingModules: TrainingModule[] = [
  {
    id: "restaurant",
    title: "قسم المطاعم (F&B Service)",
    titleEn: "Restaurant Department (F&B Service)",
    icon: "Utensils",
    description: "كل ما يخص فن الخدمة في المطاعم العالمية ونظام 'الأول إنكلوزيف'.",
    descriptionEn: "Everything related to the art of service in international restaurants and the 'All-Inclusive' system.",
    lessons: [
      {
        id: "r1",
        title: "دور المضيفة (Hostess) والاستقبال",
        titleEn: "Hostess Role & Reception",
        blocks: [
          { 
            type: 'paragraph', 
            text: "المضيفة هي واجهة المطعم. يجب أن تكون ملمة بخريطة الطاولات (Floor Plan) وتوزيع الضيوف بذكاء لمنع تكدس الخدمة في منطقة واحدة. في نظام الأول إنكلوزيف، إدارة الطوابير خلال الذروة هي أهم مهارة.",
            textEn: "The hostess is the face of the restaurant. She must be familiar with the floor plan and intelligently distribute guests to prevent service congestion in one area. In the All-Inclusive system, managing queues during peak times is the most important skill."
          }
        ],
        tips: [
          "الابتسامة هي لغة عالمية، ابدأ بها دائماً.",
          "تأكد من نظافة المنيو وقوائم المشروبات قبل تسليمها للضيف.",
          "تواصل مع المتر (Maître) فوراً في حالة وجود ضيف غير راضٍ عند المدخل."
        ],
        tipsEn: [
          "A smile is a universal language, always start with it.",
          "Ensure the menu and drink lists are clean before handing them to the guest.",
          "Communicate with the Maître immediately if there is a dissatisfied guest at the entrance."
        ]
      },
      {
        id: "r2",
        title: "مهام الكابتن والويتر (Service Flow)",
        titleEn: "Captain & Waiter Duties (Service Flow)",
        blocks: [
          { 
            type: 'paragraph', 
            text: "الكابتن هو قائد منطقة الخدمة. الويتر مسؤول عن سرعة التنفيذ، بينما الكابتن يضمن جودة التجربة والتواصل مع المتر. يجب اتقان فن 'خدمة الجانب الأيمن' وتقديم الأطباق بترتيب علمي.",
            textEn: "The Captain is the leader of the service area. The waiter is responsible for speed of execution, while the Captain ensures the quality of the experience and communication with the Maître. Mastery of the 'right-side service' art and serving dishes in a scientific sequence is essential."
          }
        ],
        tips: [
          "السرعة في رفع الأطباق الفارغة تعكس احترافية المطعم.",
          "دائماً اسأل الضيف عن جودة الطعام بطريقة لبقة (Quality Check)."
        ],
        tipsEn: [
          "Speed in clearing empty plates reflects the restaurant's professionalism.",
          "Always ask the guest about the food quality politely (Quality Check)."
        ]
      },
      {
        id: "r3",
        title: "إدارة المطعم (Maître & Manager)",
        titleEn: "Restaurant Management (Maître & Manager)",
        blocks: [
          { 
            type: 'paragraph', 
            text: "المتر والمدير يجب أن يكونا قدوة في المظهر والسلوك. تشمل المهام: مراجعة الـ Briefing اليومي، مراقبة التكاليف، وتقييم أداء الطاقم لتحفيزهم.",
            textEn: "The Maître and the Manager must be role models in appearance and behavior. Tasks include reviewing the daily briefing, monitoring costs, and evaluating staff performance to motivate them."
          }
        ],
        tips: [
          "اجتماع الـ Brief قبل الخدمة هو مفتاح نجاح الوردية.",
          "كن حاضراً في الصالة خلال وقت الذروة لدعم فريقك."
        ],
        tipsEn: [
          "The pre-service Briefing meeting is the key to a successful shift.",
          "Be present in the dining area during peak times to support your team."
        ]
      },
      {
        id: "r4",
        title: "أشهر السلطات والشوربات العالمية",
        titleEn: "Famous International Salads & Soups",
        blocks: [
          { 
            type: 'title', 
            title: "أشهر 10 سلطات عالمية ومكوناتها",
            titleEn: "Top 10 International Salads & Ingredients"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. Caesar Salad", labelEn: "1. Caesar Salad", value: "خس، صوص سيزر، قطع خبز محمص، جبنة بارميزان", valueEn: "Lettuce, Caesar dressing, croutons, parmesan cheese" },
              { label: "2. Greek Salad", labelEn: "2. Greek Salad", value: "طماطم، خيار، بصل، زيتون، جبنة فيتا، زيت زيتون", valueEn: "Tomato, cucumber, onion, olives, feta cheese, olive oil" },
              { label: "3. Caprese Salad", labelEn: "3. Caprese Salad", value: "موزاريلا طازجة، طماطم، ريحان، خل بلسميك", valueEn: "Fresh mozzarella, tomato, basil, balsamic vinegar" },
              { label: "4. Waldorf Salad", labelEn: "4. Waldorf Salad", value: "تفاح، عنب، جوز، كرفس، مايونيز", valueEn: "Apple, grapes, walnuts, celery, mayonnaise" },
              { label: "5. Nicoise Salad", labelEn: "5. Nicoise Salad", value: "تونة، فاصوليا خضراء، بطاطس، بيض مسلوق، زيتون", valueEn: "Tuna, green beans, potatoes, boiled eggs, olives" },
              { label: "6. Panzanella", labelEn: "6. Panzanella", value: "خبز منقع، طماطم، بصل، ريحان، زيت زيتون", valueEn: "Soaked bread, tomato, onion, basil, olive oil" },
              { label: "7. Cobb Salad", labelEn: "7. Cobb Salad", value: "دجاج، لحم بقري مدخن، بيض، أفوكادو، جبنة زرقاء", valueEn: "Chicken, smoked beef, eggs, avocado, blue cheese" },
              { label: "8. Fattoush", labelEn: "8. Fattoush", value: "خضروات مشكلة، خبز محمص، سماق، ليمون", valueEn: "Mixed vegetables, toasted bread, sumac, lemon" },
              { label: "9. Tabbouleh", labelEn: "9. Tabbouleh", value: "بقدونس مفروم، برغل، طماطم، نعناع، ليمون", valueEn: "Finely chopped parsley, bulgur, tomato, mint, lemon" },
              { label: "10. Coleslaw", labelEn: "10. Coleslaw", value: "كرنب مفروم، جزر، مايونيز، خل، سكر", valueEn: "Shredded cabbage, carrots, mayonnaise, vinegar, sugar" }
            ]
          },
          { 
            type: 'title', 
            title: "أشهر 10 شوربات عالمية ومكوناتها",
            titleEn: "Top 10 International Soups & Ingredients"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. French Onion", labelEn: "1. French Onion", value: "بصل مكرمل، مرق لحم، خبز محمص، جبنة شيدر", valueEn: "Caramelized onion, beef broth, croutons, cheddar cheese" },
              { label: "2. Gazpacho", labelEn: "2. Gazpacho", value: "طماطم، فلفل، خيار، ثوم، زيت زيتون (تقدم باردة)", valueEn: "Tomato, pepper, cucumber, garlic, olive oil (served cold)" },
              { label: "3. Minestrone", labelEn: "3. Minestrone", value: "خضروات مشكلة، مكرونة، فاصوليا، مرق طماطم", valueEn: "Mixed vegetables, pasta, beans, tomato broth" },
              { label: "4. Tom Yum", labelEn: "4. Tom Yum", value: "جمبري، مشروم، ليمون جراس، فلفل حار، جالنجال", valueEn: "Shrimp, mushrooms, lemongrass, chili, galangal" },
              { label: "5. Clam Chowder", labelEn: "5. Clam Chowder", value: "محار، بطاطس، بصل، كرفس، كريمة", valueEn: "Clams, potatoes, onion, celery, cream" },
              { label: "6. Lentil Soup", labelEn: "6. Lentil Soup", value: "عدس أصفر، جزر، بصل، كمون، مرق خضار", valueEn: "Yellow lentils, carrots, onion, cumin, vegetable broth" },
              { label: "7. Goulash Soup", labelEn: "7. Goulash Soup", value: "لحم بقري، بطاطس، بابريكا، بصل، طماطم", valueEn: "Beef, potatoes, paprika, onion, tomato" },
              { label: "8. Borscht", labelEn: "8. Borscht", value: "بنجر، كرنب، بطاطس، بصل، ساور كريم", valueEn: "Beets, cabbage, potatoes, onion, sour cream" },
              { label: "9. Miso Soup", labelEn: "9. Miso Soup", value: "معجون ميسو، توفو، نوري، بصل أخضر", valueEn: "Miso paste, tofu, nori, green onion" },
              { label: "10. Mulligatawny", labelEn: "10. Mulligatawny", value: "دجاج، كاري، تفاح، أرز، كريمة", valueEn: "Chicken, curry, apple, rice, cream" }
            ]
          },
          { 
            type: 'title', 
            title: "طرق تسوية اللحوم (Steak Doneness)",
            titleEn: "Steak Doneness Levels"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Rare", labelEn: "Rare", value: "قلب أحمر بارد | 50°C", valueEn: "Cold red center | 50°C" },
              { label: "Medium Rare", labelEn: "Medium Rare", value: "قلب وردي دافئ | 55°C (المثالي)", valueEn: "Warm pink center | 55°C (Ideal)" },
              { label: "Medium", labelEn: "Medium", value: "قلب وردي بالكامل | 60°C", valueEn: "Completely pink center | 60°C" },
              { label: "Medium Well", labelEn: "Medium Well", value: "قلب بني مع لمسة وردية | 65°C", valueEn: "Brown center with a hint of pink | 65°C" },
              { label: "Well Done", labelEn: "Well Done", value: "بني بالكامل، بدون عصارة | 70°C+", valueEn: "Completely brown, no juice | 70°C+" }
            ]
          },
          { 
            type: 'title', 
            title: "أصناف الشوربة العالمية",
            titleEn: "International Soup Categories"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Clear Soups", labelEn: "Clear Soups", value: "شوربات صافية مثل الكونسوميه (Consommé)", valueEn: "Clear soups like Consommé" },
              { label: "Cream Soups", labelEn: "Cream Soups", value: "شوربات كثيفة بإضافة الكريمة أو الحليب", valueEn: "Thick soups with added cream or milk" },
              { label: "Bisque", labelEn: "Bisque", value: "شوربة مأكولات بحرية غنية ومنكهة", valueEn: "Rich and flavored seafood soup" },
              { label: "Puree", labelEn: "Puree", value: "خضروات تم غليها وضربها لتصبح ناعمة", valueEn: "Boiled and blended vegetables becoming smooth" }
            ]
          }
        ],
        tips: [
          "السلطة الباردة يجب أن تقدم في أطباق مبردة.",
          "الشوربة الساخنة يجب أن تكون في درجة حرارة مثالية.",
          "تنسيق الألوان في السلطة يفتح شهية الضيف."
        ],
        tipsEn: [
          "Cold salads should be served in chilled plates.",
          "Hot soups must be at an ideal temperature.",
          "Color coordination in a salad opens the guest's appetite."
        ]
      },
      {
        id: "r6",
        title: "أنواع المطاعم ونظم الخدمة",
        titleEn: "Restaurant Types & Service Systems",
        blocks: [
          { 
            type: 'title', 
            title: "تصنيفات المطاعم",
            titleEn: "Restaurant Classifications"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "المطعم الرئيسي (Main)", labelEn: "Main Restaurant", value: "نظام بوفيه مفتوح، خدمة ذاتية مع مساعدة الويتر في المشروبات.", valueEn: "Open buffet system, self-service with waiter assistance for drinks." },
              { label: "مطعم A La Carte", labelEn: "A La Carte Restaurant", value: "طلب من القائمة، خدمة أمريكية كاملة على الطاولة.", valueEn: "Menu ordering, full American service at the table." },
              { label: "المطاعم المتخصصة", labelEn: "Specialty Restaurants", value: "تقدم مطبخاً محدداً (إيطالي، آسيوي، مأكولات بحرية).", valueEn: "Serving a specific cuisine (Italian, Asian, Seafood)." }
            ]
          },
          { 
            type: 'title', 
            title: "أساليب الخدمة العالمية",
            titleEn: "International Service Styles"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "الخدمة الأمريكية", labelEn: "American Service", value: "التحضير في المطبخ، التقديم من الجانب الأيمن.", valueEn: "Preparation in the kitchen, serving from the right side." },
              { label: "الخدمة الروسية", labelEn: "Russian Service", value: "الطعام في سرافيس كبيرة، الغرف لطبق الضيف أمام عينه.", valueEn: "Food in large platters, portioning onto the guest's plate in front of them." },
              { label: "الخدمة الفرنسية", labelEn: "French Service", value: "استخدام عربة الجيريدون للطهي والتقديم أمام الضيف.", valueEn: "Using the Gueridon trolley for cooking and serving in front of the guest." },
              { label: "الخدمة الإنجليزية", labelEn: "English Service", value: "وضع الأطباق الرئيسية في المنتصف للخدمة الذاتية للعائلات.", valueEn: "Placing main dishes in the center for families to self-serve." }
            ]
          }
        ],
        tips: [
          "الخدمة الأمريكية هي الأكثر كفاءة في وقت الذروة.",
          "تأكد دائماً من اتجاه الخدمة (يمين/يسار) حسب نظام الفندق."
        ],
        tipsEn: [
          "American service is the most efficient during peak times.",
          "Always ensure the service direction (right/left) according to the hotel system."
        ]
      },
      {
        id: "r7",
        title: "ترتيب الخدمة والمنيوهات المتخصصة",
        titleEn: "Order of Service & Specialty Menus",
        blocks: [
          { 
            type: 'title', 
            title: "التسلسل الزمني لخدمة المطاعم المتخصصة",
            titleEn: "Sequence of Service in Specialty Restaurants"
          },
          { 
            type: 'list', 
            items: [
              "المقبلات الباردة والساخنة (Appetizers)",
              "الشوربة (Soup)",
              "السلطة (Salad)",
              "الطبق الرئيسي (Main Course)",
              "الحلويات والقهوة (Dessert & Coffee)"
            ],
            itemsEn: [
              "Cold and Hot Appetizers",
              "Soup",
              "Salad",
              "Main Course",
              "Dessert & Coffee"
            ]
          },
          { 
            type: 'title', 
            title: "نماذج منيوهات المطاعم المتخصصة (النماذج الشهيرة)",
            titleEn: "Famous Specialty Restaurant Menu Examples"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "المطعم الإيطالي (Italian)", labelEn: "Italian Restaurant", value: "Bruschetta -> Minestrone -> Lasagna -> Tiramisu", valueEn: "Bruschetta -> Minestrone -> Lasagna -> Tiramisu" },
              { label: "المطعم الآسيوي (Asian)", labelEn: "Asian Restaurant", value: "Spring Rolls -> Tom Yum -> Beef Teriyaki -> Fried Pineapple", valueEn: "Spring Rolls -> Tom Yum -> Beef Teriyaki -> Fried Pineapple" },
              { label: "مطعم الستيك (Steak House)", labelEn: "Steak House", value: "Shrimp Cocktail -> Onion Soup -> Ribeye -> Cheesecake", valueEn: "Shrimp Cocktail -> Onion Soup -> Ribeye -> Cheesecake" },
              { label: "المطعم اللبناني (Oriental)", labelEn: "Oriental Restaurant", value: "Mezze -> Lentil Soup -> Mixed Grill -> Om Ali", valueEn: "Mezze -> Lentil Soup -> Mixed Grill -> Om Ali" }
            ]
          }
        ],
        tips: [
          "تأكد من نظافة المنيو يومياً.",
          "شرح مكونات الطبق للضيف يرفع من قيمة تجربة الخدمة."
        ],
        tipsEn: [
          "Ensure the menu is clean daily.",
          "Explaining dish ingredients to the guest enhances the service experience."
        ]
      },
      {
        id: "r8",
        title: "خطوات الخدمة الاحترافية (Steps of Service)",
        titleEn: "Professional Steps of Service",
        blocks: [
          { 
            type: 'title', 
            title: "المراحل العشر للخدمة الفندقية",
            titleEn: "The Ten Stages of Hotel Service"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. ترحيب الضيف", labelEn: "1. Guest Welcome", value: "التحية خلال 30 ثانية من الوصول بابتسامة.", valueEn: "Greeting within 30 seconds of arrival with a smile." },
              { label: "2. الإجلاس وتقديم المنيو", labelEn: "2. Seating & Menu Presentation", value: "مساعدة الضيف في الجلوس وفتح الفوطة وتقديم قائمة الطعام.", valueEn: "Assisting guests with seating, unfolding napkins, and presenting the menu." },
              { label: "3. طلب المشروبات", labelEn: "3. Drink Order", value: "اقتراح مشروبات من فاتح الشهية (Aperitifs).", valueEn: "Suggesting aperitif drinks." },
              { label: "4. تقديم الخبز والمياه", labelEn: "4. Bread & Water Service", value: "وضع سلة الخبز والمياه المعدنية فوراً.", valueEn: "Placing the bread basket and mineral water immediately." },
              { label: "5. أخذ الطلب (Order)", labelEn: "5. Taking the Order", value: "استخدام نظام الإعادات (Repeat back) للتأكد من الطلب.", valueEn: "Using the repeat-back system to confirm the order." },
              { label: "6. تقديم الطعام", labelEn: "6. Serving Food", value: "التزامن في التقديم لكافة ضيوف الطاولة.", valueEn: "Synchronized serving for all guests at the table." },
              { label: "7. متابعة الجودة", labelEn: "7. Quality Check-back", value: "سؤال الضيف (Check-back) بعد دقيقتين من بدء الأكل.", valueEn: "Asking the guest for feedback 2 minutes after they start eating." },
              { label: "8. رفع الأطباق (Clearing)", labelEn: "8. Clearing Plates", value: "عند انتهاء الضيف تماماً من الجانب الأيمن.", valueEn: "When the guest is completely finished, from the right side." },
              { label: "9. اقتراح الحلويات", labelEn: "9. Suggesting Desserts", value: "تقديم منيو الحلويات والقهوة/الشاي.", valueEn: "Presenting the dessert, coffee, or tea menu." },
              { label: "10. الوداع والشكر", labelEn: "10. Farewell & Thank You", value: "شكر الضيف ودعوته للزيارة مرة أخرى.", valueEn: "Thanking the guest and inviting them to visit again." }
            ]
          }
        ],
        tips: [
          "الخدمة هي فن الاهتمام بالتفاصيل الصغيرة.",
          "تجنب مقاطعة الضيف أثناء حديثه تماماً."
        ],
        tipsEn: [
          "Service is the art of paying attention to small details.",
          "Avoid interrupting the guest while they are speaking completely."
        ]
      },
      {
        id: "r9",
        title: "إدارة شكاوى الضيوف (Guest Complaints)",
        titleEn: "Guest Complaint Management",
        blocks: [
          { 
            type: 'title', 
            title: "نظام التعامل مع الشكوى (LAST Model)",
            titleEn: "Complaint Handling System (LAST Model)"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. الاستماع (Listen)", labelEn: "1. Listen", value: "استمع للضيف للنهاية دون مقاطعة وأظهر اهتمامك.", valueEn: "Listen to the guest until the end without interruption and show your empathy." },
              { label: "2. الاعتذار (Apologize)", labelEn: "2. Apologize", value: "اعتذار بصدق عن الخطأ حتى لو لم تكن المخطئ.", valueEn: "Apologize sincerely for the mistake, even if it wasn't your fault." },
              { label: "3. الحل (Solve)", labelEn: "3. Solve", value: "عرض حلول فورية (تبديل طبق، تعويض) وإبلاغ المدير.", valueEn: "Offer immediate solutions (dish exchange, compensation) and inform the manager." },
              { label: "4. الشكر (Thank)", labelEn: "4. Thank", value: "شكر الضيف على لفت نظرك للمشكلة لتحسين الخدمة.", valueEn: "Thank the guest for bringing the issue to your attention to improve service." }
            ]
          },
          { 
            type: 'title', 
            title: "أخطاء يجب تجنبها",
            titleEn: "Common Mistakes to Avoid"
          },
          { 
            type: 'list', 
            items: [
              "الجدال مع الضيف أو محاولة إثبات خطئه.",
              "الابتسام أثناء غضب الضيف (يفهم كاستهزاء).",
              "إلقاء اللوم على زملاء آخرين أو على المطبخ."
            ],
            itemsEn: [
              "Arguing with the guest or trying to prove them wrong.",
              "Smiling while the guest is angry (it is perceived as mockery).",
              "Blaming other colleagues or the kitchen."
            ]
          }
        ],
        tips: [
          "حول الضيف الغاضب إلى ضيف مخلص بالتعامل الراقي.",
          "الهدوء هو سلاحك الأقوى في مواجهة الأزمات."
        ],
        tipsEn: [
          "Turn an angry guest into a loyal one with classy treatment.",
          "Calmness is your strongest weapon in crisis."
        ]
      },
      {
        id: "r10",
        title: "فن الاستقبال والترحيب (Welcoming Guest)",
        titleEn: "Art of Reception & Welcoming",
        blocks: [
          { 
            type: 'title', 
            title: "بروتوكول الاستقبال الفخم",
            titleEn: "Luxury Reception Protocol"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "التحية (Greeting)", labelEn: "Greeting", value: "استخدام عبارات الترحيب المناسبة للوقت (Good Morning/Evening).", valueEn: "Use appropriate greetings for the time of day." },
              { label: "المرافقة (Escorting)", labelEn: "Escorting", value: "المشي أمام الضيف بمسافة خطوتين وإيصاله للطاولة.", valueEn: "Walk ahead of the guest by two steps and lead them to the table." },
              { label: "سحر الاسم", labelEn: "Name Magic", value: "إذا كان الضيف يكرر الزيارة، استخدم اسمه بلقب (Mr./Ms.).", valueEn: "If the guest is a repeat visitor, use their name with a title." },
              { label: "تقديم المقعد", labelEn: "Offering a Seat", value: "بدأ الإجلاس بالسيدات أولاً ثم كبار السن.", valueEn: "Start seating ladies first, then the elderly." }
            ]
          }
        ],
        tips: [
          "الانطباع الأول يدوم للأبد، فليكن مبهراً.",
          "خريطة الطاولات (Floor Plan) هي خريطتك للنجاح."
        ],
        tipsEn: [
          "First impressions last forever, let them be amazing.",
          "The Floor Plan is your map to success."
        ]
      },
      {
        id: "r11",
        title: "سلامة الغذاء والهاسب (HACCP & Safety)",
        titleEn: "Food Safety & HACCP",
        blocks: [
          { 
            type: 'title', 
            title: "قواعد الهاسب والصحة العامة للعاملين",
            titleEn: "HACCP Rules & General Health for Employees"
          },
          { 
            type: 'list', 
            items: [
              "النظافة الشخصية: غسل اليدين جيداً كل 20 دقيقة وعند لمس أي سطح ملوث.",
              "درجة الحرارة: حفظ الأطعمة الساخنة فوق 63 درجة والباردة تحت 5 درجات.",
              "منطقة الخطر (Danger Zone): عدم ترك الطعام بين 5 و 60 درجة لأكثر من ساعتين.",
              "منع التلوث الخلطي: فصل السكاكين وألواح التقطيع للحوم عن الخضروات.",
              "التخزين السليم: اتباع قاعدة (FIFO) الوارد أولاً يصرف أولاً.",
              "مكافحة الآفات: الإبلاغ الفوري عن أي ملاحظة في منطقة العمل.",
              "الملابس المهنية: ارتداء اليونيفورم النظيف وغطاء الرأس ومنع ارتداء الإكسسوارات."
            ],
            itemsEn: [
              "Personal Hygiene: Wash hands thoroughly every 20 minutes and after touching any contaminated surface.",
              "Temperature Control: Keep hot food above 63°C and cold food below 5°C.",
              "Danger Zone: Do not leave food between 5°C and 60°C for more than 2 hours.",
              "Cross-Contamination Prevention: Separate knives and cutting boards for meat and vegetables.",
              "Proper Storage: Follow the FIFO (First-In, First-Out) rule.",
              "Pest Control: Report any observations in the workplace immediately.",
              "Professional Attire: Wear a clean uniform and head cover, no accessories."
            ]
          }
        ],
        tips: [
          "لا تتهاون أبداً في صحة وسلامة الضيف.",
          "تذكر دائماً: 'النظافة تبدأ منك أنت'."
        ],
        tipsEn: [
          "Never compromise on guest health and safety.",
          "Always remember: 'Hygiene starts from you'."
        ]
      }
    ]
  },
  {
    id: "bar",
    title: "قسم البار (Professional Bar)",
    titleEn: "Bar Department (Professional Bar)",
    icon: "GlassWater",
    description: "تجهيز البار والميكسولوجي المتقدم.",
    descriptionEn: "Advanced bar setup and mixology.",
    lessons: [
      {
        id: "b1",
        title: "تجهيز البار (The Perfect Setup)",
        titleEn: "Bar Setup (The Perfect Setup)",
        blocks: [
          { 
            type: 'title', 
            title: "مراحل تجهيز البار اليومية",
            titleEn: "Daily Bar Setup Stages"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. منطقة العمل (Underbar)", labelEn: "1. Underbar Area", value: "ترتيب الثلج، الجيجر، الشيكر في متناول اليد.", valueEn: "Organizing ice, jiggers, and shakers within arm's reach." },
              { label: "2. الرف السريع (Speed Rail)", labelEn: "2. Speed Rail", value: "وضع المشروبات الأكثر طلباً لسرعة الوصول.", valueEn: "Placing the most requested drinks for quick access." },
              { label: "3. منطقة التحضير (Prep)", labelEn: "3. Prep Area", value: "تقطيع الجرنيش وعصر الموالح الطازجة.", valueEn: "Cutting garnishes and squeezing fresh citrus." },
              { label: "4. فحص المبردات", labelEn: "4. Cooler Check", value: "التأكد من درجات حرارة الثلاجات ونظافتها.", valueEn: "Ensuring refrigerator temperatures and cleanliness." }
            ]
          }
        ],
        tips: [
          "النظافة هي الانطباع الأول للضيف.",
          "قاعدة 5 ثوان: كل أداة يجب الوصول إليها في أقل من 5 ثوان."
        ],
        tipsEn: [
          "Cleanliness is the guest's first impression.",
          "The 5-second rule: every tool should be reachable in less than 5 seconds."
        ]
      },
      {
        id: "b4",
        title: "الميكسولوجي وصناعة السيرابات",
        titleEn: "Mixology & Syrup Making",
        blocks: [
          { 
            type: 'title', 
            title: "6 أنواع سيرابات منزلية (النسب الدقيقة وكيفية التحضير)",
            titleEn: "6 Types of House Syrups (Exact Ratios & How to Prepare)"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. Simple Syrup (1:1)", labelEn: "1. Simple Syrup (1:1)", value: "50% سكر + 50% ماء. يغلى الماء ويضاف السكر مع التقليب حتى يذوب تماماً.", valueEn: "50% sugar + 50% water. Boil water, add sugar and stir until completely dissolved." },
              { label: "2. Rich Syrup (2:1)", labelEn: "2. Rich Syrup (2:1)", value: "66% سكر + 33% ماء. قوام كثيف جداً، عمر افتراضي أطول، مثالي للكوكتيلات الكلاسيكية.", valueEn: "66% sugar + 33% water. Very thick consistency, longer shelf life, ideal for classic cocktails." },
              { label: "3. Honey Syrup (3:1)", labelEn: "3. Honey Syrup (3:1)", value: "75% عسل نحل + 25% ماء دافئ. يخفف العسل ليسهل خلطه وذوبانه في المشروبات الباردة.", valueEn: "75% honey + 25% warm water. Dilutes honey for easy mixing and dissolving in cold drinks." },
              { label: "4. Ginger Syrup (1:1)", labelEn: "4. Ginger Syrup (1:1)", value: "50% عصير زنجبيل طازج + 50% سكر. يرفع المذاق الحراري للكوكتيلات المنعشة.", valueEn: "50% fresh ginger juice + 50% sugar. Enhances the spicy profile of refreshing cocktails." },
              { label: "5. Cinnamon Syrup", labelEn: "5. Cinnamon Syrup", value: "سيرب بسيط منقوع فيه أعواد قرفة مغلية لمدة 20 دقيقة لإضفاء المذاق الخشبي.", valueEn: "Simple syrup infused with cinnamon sticks boiled for 20 minutes for a woody flavor." },
              { label: "6. Grenadine Syrup", labelEn: "6. Grenadine Syrup", value: "50% عصير رمان طبيعي + 50% سكر + نقطة ماء ورد. يعطي قواماً مخملياً ولوناً أحمر جذاباً.", valueEn: "50% natural pomegranate juice + 50% sugar + a drop of rose water. Gives a velvety texture and an attractive red color." }
            ]
          },
          { 
            type: 'title', 
            title: "5 ليكرات منزلية شهيرة",
            titleEn: "5 Famous Homemade Liqueurs"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Coffee Liqueur", labelEn: "Coffee Liqueur", value: "فودكا + اسبريسو + سيرب فانيليا غني", valueEn: "Vodka + espresso + rich vanilla syrup" },
              { label: "Triple Sec", labelEn: "Triple Sec", value: "كحول محايد + قشور برتقال مجففة + سكر", valueEn: "Neutral spirit + dried orange peels + sugar" },
              { label: "Irish Cream", labelEn: "Irish Cream", value: "ويسكي + حليب مكثف + كاكاو + قشطة", valueEn: "Whiskey + condensed milk + cocoa + cream" },
              { label: "Vanilla Liqueur", labelEn: "Vanilla Liqueur", value: "براندي + أعواد فانيليا طبيعية (نقع أسبوعين)", valueEn: "Brandy + natural vanilla beans (steeped for two weeks)" },
              { label: "Bitters Liqueur", labelEn: "Bitters Liqueur", value: "كحول قوي + قشور ليمون + يانسون + نعناع", valueEn: "Strong spirit + lemon peels + anise + mint" }
            ]
          }
        ],
        tips: [
          "دائماً قم بتصفية السيرابات جيداً قبل التعبئة.",
          "برج الزجاجة قبل الاستخدام لضمان تجانس المكونات."
        ],
        tipsEn: [
          "Always strain syrups well before bottling.",
          "Shake the bottle before use to ensure ingredient homogeneity."
        ]
      },
      {
        id: "b2",
        title: "20 كوكتيل عالمي و 10 موكتيل",
        titleEn: "20 International Cocktails & 10 Mocktails",
        blocks: [
          { 
            type: 'title', 
            title: "قائمة العشرين كوكتيل العالمي (النيابة والمكونات)",
            titleEn: "Top 20 International Cocktails (Names & Ingredients)"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. Margarita", labelEn: "1. Margarita", value: "Tequila, Triple Sec, Fresh Lime Juice", valueEn: "Tequila, Triple Sec, Fresh Lime Juice" },
              { label: "2. Mojito", labelEn: "2. Mojito", value: "White Rum, Fresh Mint, Lime, Soda, Sugar", valueEn: "White Rum, Fresh Mint, Lime, Soda, Sugar" },
              { label: "3. Negroni", labelEn: "3. Negroni", value: "Gin, Campari, Sweet Vermouth", valueEn: "Gin, Campari, Sweet Vermouth" },
              { label: "4. Old Fashioned", labelEn: "4. Old Fashioned", value: "Bourbon/Rye, Sugar, Angostura Bitters", valueEn: "Bourbon/Rye, Sugar, Angostura Bitters" },
              { label: "5. Martini (Dry)", labelEn: "5. Martini (Dry)", value: "Gin, Dry Vermouth, Olive/Lemon Twist", valueEn: "Gin, Dry Vermouth, Olive/Lemon Twist" },
              { label: "6. Daiquiri", labelEn: "6. Daiquiri", value: "White Rum, Lime Juice, Simple Syrup", valueEn: "White Rum, Lime Juice, Simple Syrup" },
              { label: "7. Whiskey Sour", labelEn: "7. Whiskey Sour", value: "Whiskey, Lemon, Sugar, Egg White (Optional)", valueEn: "Whiskey, Lemon, Sugar, Egg White (Optional)" },
              { label: "8. Espresso Martini", labelEn: "8. Espresso Martini", value: "Vodka, Espresso, Coffee Liqueur, Sugar", valueEn: "Vodka, Espresso, Coffee Liqueur, Sugar" },
              { label: "9. Moscow Mule", labelEn: "9. Moscow Mule", value: "Vodka, Ginger Beer, Lime Juice", valueEn: "Vodka, Ginger Beer, Lime Juice" },
              { label: "10. Manhattan", labelEn: "10. Manhattan", value: "Rye Whiskey, Sweet Vermouth, Bitters", valueEn: "Rye Whiskey, Sweet Vermouth, Bitters" },
              { label: "11. Cosmopolitan", labelEn: "11. Cosmopolitan", value: "Vodka Citron, Cointreau, Cranberry, Lime", valueEn: "Vodka Citron, Cointreau, Cranberry, Lime" },
              { label: "12. Aperol Spritz", labelEn: "12. Aperol Spritz", value: "Aperol, Prosecco, Soda Water", valueEn: "Aperol, Prosecco, Soda Water" },
              { label: "13. Pina Colada", labelEn: "13. Pina Colada", value: "Rum, Coconut Cream, Pineapple Juice", valueEn: "Rum, Coconut Cream, Pineapple Juice" },
              { label: "14. Bloody Mary", labelEn: "14. Bloody Mary", value: "Vodka, Tomato Juice, Spices, Celery", valueEn: "Vodka, Tomato Juice, Spices, Celery" },
              { label: "15. Mai Tai", labelEn: "15. Mai Tai", value: "Rum, Orgeat, Orange Curacao, Lime", valueEn: "Rum, Orgeat, Orange Curacao, Lime" },
              { label: "16. Paloma", labelEn: "16. Paloma", value: "Tequila, Grapefruit Soda, Lime Juice", valueEn: "Tequila, Grapefruit Soda, Lime Juice" },
              { label: "17. Gin & Tonic", labelEn: "17. Gin & Tonic", value: "Premium Gin, Tonic Water, Garnish", valueEn: "Premium Gin, Tonic Water, Garnish" },
              { label: "18. Boulevardier", labelEn: "18. Boulevardier", value: "Bourbon, Campari, Sweet Vermouth", valueEn: "Bourbon, Campari, Sweet Vermouth" },
              { label: "19. Sidecar", labelEn: "19. Sidecar", value: "Cognac, Triple Sec, Lemon Juice", valueEn: "Cognac, Triple Sec, Lemon Juice" },
              { label: "20. Dark 'n' Stormy", labelEn: "20. Dark 'n' Stormy", value: "Dark Rum, Ginger Beer, Lime", valueEn: "Dark Rum, Ginger Beer, Lime" }
            ]
          },
          { 
            type: 'title', 
            title: "أشهر 10 موكتيلات عالمية (Mocktails)",
            titleEn: "Top 10 International Mocktails"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. Virgin Mojito", labelEn: "1. Virgin Mojito", value: "Classic mint and lime refresh with soda", valueEn: "Classic mint and lime refresh with soda" },
              { label: "2. Shirley Temple", labelEn: "2. Shirley Temple", value: "Grenadine, Ginger Ale, Maraschino Cherry", valueEn: "Grenadine, Ginger Ale, Maraschino Cherry" },
              { label: "3. Virgin Colada", labelEn: "3. Virgin Colada", value: "Coconut Cream & Pineapple Blend", valueEn: "Coconut Cream & Pineapple Blend" },
              { label: "4. Safe Sex on the Beach", labelEn: "4. Safe Sex on the Beach", value: "Orange, Cranberry, & Peach juices", valueEn: "Orange, Cranberry, & Peach juices" },
              { label: "5. Fruit Punch", labelEn: "5. Fruit Punch", value: "Seasonal mixed juices with grenadine", valueEn: "Seasonal mixed juices with grenadine" },
              { label: "6. Apple Fizz", labelEn: "6. Apple Fizz", value: "Apple juice, lemon, and sparkling water", valueEn: "Apple juice, lemon, and sparkling water" },
              { label: "7. Cucumber Cooler", labelEn: "7. Cucumber Cooler", value: "Fresh cucumber, lime, mint, and soda", valueEn: "Fresh cucumber, lime, mint, and soda" },
              { label: "8. Lavender Lemonade", labelEn: "8. Lavender Lemonade", value: "Fresh lemon juice with lavender syrup", valueEn: "Fresh lemon juice with lavender syrup" },
              { label: "9. Virgin Mary", labelEn: "9. Virgin Mary", value: "Tomato juice base with savory spices", valueEn: "Tomato juice base with savory spices" },
              { label: "10. Sunrise Mocktail", labelEn: "10. Sunrise Mocktail", value: "Orange juice with a grenadine sinker", valueEn: "Orange juice with a grenadine sinker" }
            ]
          }
        ],
        tips: [
          "استخدم دائماً أكواب مبردة.",
          "السرعة في التحضير تمنع ذوبان الثلج الزائد."
        ],
        tipsEn: [
          "Always use chilled glasses.",
          "Speed of preparation prevents excessive ice melt."
        ]
      }
    ]
  },
  {
    id: "spirits",
    title: "موسوعة المشروبات الروحية",
    titleEn: "Encyclopedia of Spirits",
    icon: "Wine",
    description: "تاريخ وأنواع المشروبات الروحية.",
    descriptionEn: "History and types of distilled spirits and wine.",
    lessons: [
      {
        id: "s1",
        title: "المشروبات المقطرة والنبيذ",
        titleEn: "Distilled Spirits & Wine",
        blocks: [
          { 
            type: 'title', 
            title: "المقطرات الأساسية (Base Spirits) والتاريخ",
            titleEn: "Base Spirits & History"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Vodka", labelEn: "Vodka", value: "حبوب/بطاطس | تاريخ روسي | نقاء عالي", valueEn: "Grains/Potatoes | Russian history | High purity" },
              { label: "Gin", labelEn: "Gin", value: "فودكا + نبات العرعر | تاريخ هولندي/إنجليزي", valueEn: "Vodka + Juniper berries | Dutch/English history" },
              { label: "Rum", labelEn: "Rum", value: "قصب سكر | تاريخ كاريبي | نكهة غنية", valueEn: "Sugar cane | Caribbean history | Rich flavor" },
              { label: "Tequila", labelEn: "Tequila", value: "نبات الآجاف الأزرق | تاريخ مكسيكي حصري", valueEn: "Blue Agave plant | Exclusive Mexican history" },
              { label: "Whiskey", labelEn: "Whiskey", value: "حبوب مخمرة + تعتيق | تاريخ أيرلندي/اسكتلندي", valueEn: "Fermented grains + aging | Irish/Scottish history" }
            ]
          },
          { 
            type: 'title', 
            title: "أنواع النبيذ (Wines)",
            titleEn: "Types of Wines"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "1. النبيذ الساكن (Still)", labelEn: "1. Still Wine", value: "الأحمر، الأبيض، والروزيه حسب نوع العنب.", valueEn: "Red, White, and Rosé depending on the grape variety." },
              { label: "2. النبيذ الفوار (Sparkling)", labelEn: "2. Sparkling Wine", value: "الشامبانيا والبروسيكو (غازات طبيعية).", valueEn: "Champagne and Prosecco (natural carbonation)." },
              { label: "3. النبيذ المعزز (Fortified)", labelEn: "3. Fortified Wine", value: "إضافة كحول مثل (Port, Sherry).", valueEn: "Alcohol addition (e.g., Port, Sherry)." },
              { label: "4. النبيذ المنكه (Aromatized)", labelEn: "4. Aromatized Wine", value: "أعشاب وتوابل مثل (Vermouth).", valueEn: "Herbs and spices (e.g., Vermouth)." }
            ]
          },
          { 
            type: 'title', 
            title: "البيرة (Beer Guide)",
            titleEn: "Beer Guide"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Lager", labelEn: "Lager", value: "خفيفة ومنعشة، تخمر في حرارة منخفضة.", valueEn: "Light and refreshing, fermented at low temperatures." },
              { label: "Ale", labelEn: "Ale", value: "غنية وروائح قوية، تخمر في حرارة دافئة.", valueEn: "Rich with strong aromas, fermented at warm temperatures." },
              { label: "Stout", labelEn: "Stout", value: "داكنة بنكهات محمصة (مثل جينيس).", valueEn: "Dark with roasted flavors (e.g., Guinness)." }
            ]
          }
        ],
        tips: [
          "كل مشروب له كوب خاص وتاريخ عريق يجب احترامه عند الخدمة."
        ],
        tipsEn: [
          "Each drink has a specific glass and a rich history that must be respected during service."
        ]
      }
    ]
  },
  {
    id: "general",
    title: "مهارات عامة (Soft Skills)",
    titleEn: "General Skills (Soft Skills)",
    icon: "Star",
    description: "اللغات، الاتيكيت، وحل المشكلات المهنية.",
    descriptionEn: "Languages, etiquette, and professional problem-solving.",
    lessons: [
      {
        id: "g1",
        title: "اللغات والتواصل",
        titleEn: "Languages & Communication",
        blocks: [
          { 
            type: 'title', 
            title: "أهم الجمل والكلمات (Hospitality English)",
            titleEn: "Key Phrases & Words (Hospitality English)"
          },
          { 
            type: 'grid', 
            gridItems: [
              { label: "Welcome", labelEn: "Welcome", value: "أهلاً بك - ترحيب حار عند المدخل", valueEn: "Welcome - A warm greeting at the entrance" },
              { label: "How can I help you?", labelEn: "How can I help you?", value: "كيف يمكنني مساعدتك؟", valueEn: "How can I help you?" },
              { label: "Enjoy your meal", labelEn: "Enjoy your meal", value: "بالهناء والشفاء - تقال عند التقديم", valueEn: "Enjoy your meal - Said when serving" },
              { label: "Still or Sparkling?", labelEn: "Still or Sparkling?", value: "مياه عادية أم فوارة؟", valueEn: "Still or Sparkling?" },
              { label: "Are you allergic?", labelEn: "Are you allergic?", value: "هل لديك حساسية من أي طعام؟", valueEn: "Do you have any food allergies?" }
            ]
          }
        ],
        tips: [
          "حفظ أسماء الأطباق والمكونات باللغة الإنجليزية سر النجاح.",
          "الابتسامة لغة عالمية يفهمها الجميع."
        ],
        tipsEn: [
          "Memorizing dish names and ingredients in English is the secret to success.",
          "A smile is a universal language everyone understands."
        ]
      }
    ]
  }
];
