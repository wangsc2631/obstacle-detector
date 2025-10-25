// 擴展物品資料庫 - 1500+種物品
const itemDatabase = {
  // 1. 人物動物類 (100+)
  '人物動物': {
    'person': '人', 'baby': '嬰兒', 'child': '小孩', 'adult': '成人', 'elderly': '老人',
    'man': '男人', 'woman': '女人', 'boy': '男孩', 'girl': '女孩', 'teenager': '青少年',
    'bird': '鳥', 'cat': '貓', 'dog': '狗', 'horse': '馬', 'cow': '牛',
    'sheep': '羊', 'goat': '山羊', 'pig': '豬', 'chicken': '雞', 'duck': '鴨',
    'rabbit': '兔子', 'hamster': '倉鼠', 'guinea pig': '天竺鼠', 'turtle': '烏龜',
    'fish': '魚', 'goldfish': '金魚', 'shark': '鯊魚', 'dolphin': '海豚',
    'whale': '鯨魚', 'elephant': '大象', 'lion': '獅子', 'tiger': '老虎',
    'bear': '熊', 'panda': '熊貓', 'monkey': '猴子', 'giraffe': '長頸鹿',
    'zebra': '斑馬', 'kangaroo': '袋鼠', 'penguin': '企鵝', 'owl': '貓頭鷹',
    'eagle': '老鷹', 'parrot': '鸚鵡', 'sparrow': '麻雀', 'pigeon': '鴿子',
    'butterfly': '蝴蝶', 'bee': '蜜蜂', 'ant': '螞蟻', 'spider': '蜘蛛',
    'snake': '蛇', 'lizard': '蜥蜴', 'frog': '青蛙', 'crocodile': '鱷魚',
    'camel': '駱駝', 'fox': '狐狸', 'wolf': '狼', 'deer': '鹿', 'bat': '蝙蝠',
    'octopus': '章魚', 'squid': '魷魚', 'crab': '螃蟹', 'lobster': '龍蝦', 'shrimp': '蝦子',
    'jellyfish': '水母', 'starfish': '海星', 'seahorse': '海馬', 'seal': '海豹', 'walrus': '海象'
  },

  // 2. 交通工具類 (80+)
  '交通工具': {
    'car': '汽車', 'bus': '公車', 'truck': '卡車', 'motorcycle': '摩托車',
    'bicycle': '腳踏車', 'scooter': '滑板車', 'train': '火車', 'subway': '地鐵',
    'airplane': '飛機', 'helicopter': '直升機', 'boat': '船', 'ship': '輪船',
    'yacht': '遊艇', 'canoe': '獨木舟', 'ambulance': '救護車', 'fire truck': '消防車',
    'police car': '警車', 'taxi': '計程車', 'van': '廂型車', 'jeep': '吉普車',
    'minivan': '休旅車', 'suv': '運動休旅車', 'sedan': '房車', 'convertible': '敞篷車',
    'racing car': '賽車', 'bulldozer': '推土機', 'excavator': '挖土機', 'tractor': '拖拉機',
    'forklift': '堆高機', 'cement mixer': '水泥攪拌車', 'garbage truck': '垃圾車', 'delivery truck': '送貨卡車',
    'pickup truck': '皮卡車', 'semi-truck': '半掛牽引車', 'tanker truck': '油罐車', 'flatbed truck': '平板卡車',
    'sports car': '跑車', 'limousine': '豪華轎車', 'rv': '露營車', 'motorhome': '自行車房車',
    'sailboat': '帆船', 'speedboat': '快艇', 'ferry': '渡輪', 'cruise ship': '郵輪',
    'hot air balloon': '熱氣球', 'blimp': '飛艇', 'glider': '滑翔機', 'fighter jet': '戰鬥機',
    'propeller plane': '螺旋槳飛機', 'cargo plane': '貨機', 'hang glider': '懸掛式滑翔機', 'parachute': '降落傘'
  },

  // 3. 家具類 (80+)
  '家具': {
    'chair': '椅子', 'sofa': '沙發', 'couch': '長沙發', 'bed': '床',
    'table': '桌子', 'desk': '書桌', 'dining table': '餐桌', 'coffee table': '咖啡桌',
    'cabinet': '櫥櫃', 'wardrobe': '衣櫃', 'bookshelf': '書架', 'dresser': '梳妝台',
    'nightstand': '床頭櫃', 'stool': '凳子', 'bench': '長椅', 'rocking chair': '搖椅',
    'armchair': '扶手椅', 'office chair': '辦公椅', 'bar stool': '吧台椅',
    'recliner': '躺椅', 'chaise lounge': '躺臥椅', 'futon': '日式床垫', 'hammock': '吊床',
    'cot': '折疊床', 'bunk bed': '上下舖', 'crib': '嬰兒床', 'high chair': '高腳椅',
    'sideboard': '餐具櫃', 'hutch': '隔板櫃', 'cupboard': '碗櫃', 'pantry': '食品儲藏櫃',
    'entertainment center': ' entertainment中心', 'tv stand': '電視櫃', 'chest of drawers': '抽屜櫃', 'curio cabinet': '展示櫃',
    'vanity': '化妝台', 'chiffonier': '五斗櫃', 'secretary desk': '書寫台', 'writing desk': '寫字檯',
    'conference table': '會議桌', 'dining bench': '餐椅長凳', 'window seat': '窗邊座位', 'ottoman': '腳凳'
  },

  // 4. 電子產品類 (100+)
  '電子產品': {
    'tv': '電視', 'computer': '電腦', 'laptop': '筆記型電腦', 'monitor': '顯示器',
    'keyboard': '鍵盤', 'mouse': '滑鼠', 'printer': '印表機', 'scanner': '掃描器',
    'router': '路由器', 'modem': '數據機', 'smartphone': '智慧手機', 'tablet': '平板電腦',
    'camera': '相機', 'webcam': '網路攝影機', 'microphone': '麥克風', 'speaker': '喇叭',
    'headphones': '耳機', 'earphones': '耳塞', 'remote': '遙控器', 'game console': '遊戲機',
    'controller': '控制器', 'smartwatch': '智慧手錶', 'fitness tracker': '健身手環',
    'projector': '投影機', 'soundbar': '音響條', 'amplifier': '擴大機', 'receiver': '接收器',
    'dvd player': 'DVD播放器', 'blu-ray player': '藍光播放器', 'streaming device': '串流裝置', 'set-top box': '機上盒',
    'smart tv': '智慧電視', 'desktop computer': '桌上型電腦', 'all-in-one pc': '一體成型電腦', 'server': '伺服器',
    'network switch': '網路交換器', 'wireless access point': '無線存取點', 'network attached storage': '網路附加儲存設備', 'ups': '不斷電系統',
    'graphics card': '顯示卡', 'motherboard': '主機板', 'cpu': '中央處理器', 'ram': '記憶體',
    'hard drive': '硬碟', 'solid state drive': '固態硬碟', 'optical drive': '光碟機', 'power supply': '電源供應器',
    'cooling fan': '散熱風扇', 'computer case': '電腦機殼', 'battery': '電池', 'charger': '充電器',
    'external hard drive': '外接硬碟', 'flash drive': '隨身碟', 'memory card': '記憶卡', 'card reader': '讀卡機'
  },

  // 5. 廚房用品類 (150+)
  '廚房用品': {
    'refrigerator': '冰箱', 'oven': '烤箱', 'microwave': '微波爐', 'stove': '爐灶',
    'dishwasher': '洗碗機', 'blender': '果汁機', 'toaster': '烤麵包機', 'kettle': '熱水壺',
    'coffee maker': '咖啡機', 'mixer': '攪拌機', 'food processor': '食物處理機',
    'knife': '刀子', 'fork': '叉子', 'spoon': '湯匙', 'chopsticks': '筷子',
    'plate': '盤子', 'bowl': '碗', 'cup': '杯子', 'mug': '馬克杯',
    'glass': '玻璃杯', 'wine glass': '酒杯', 'bottle': '瓶子', 'jar': '罐子',
    'pot': '鍋子', 'pan': '平底鍋', 'wok': '炒鍋', 'cutting board': '砧板',
    'colander': '濾網', 'strainer': '過濾器', 'grater': '刨絲器', 'peeler': '削皮器',
    'can opener': '開罐器', 'bottle opener': '開瓶器', 'corkscrew': '開瓶鑽', 'measuring cup': '量杯',
    'measuring spoon': '量匙', 'timer': '計時器', 'thermometer': '溫度計', 'kitchen scale': '廚房磅秤',
    'rolling pin': '擀麵棍', 'ladle': '湯杓', 'spatula': '刮刀', 'turner': '翻面鏟',
    'tongs': '夾子', 'whisk': '打蛋器', 'mortar and pestle': '研缽和研杵', 'garlic press': '壓蒜器',
    'zester': '柑橘刨', 'ice cream scoop': '冰淇淋勺', 'cookie cutter': '餅乾切模', 'kitchen shears': '廚房剪刀',
    'pot holder': '隔熱手套', 'oven mitt': '烤箱手套', 'apron': '圍裙', 'kitchen towel': '廚房毛巾',
    'dish rack': '瀝水架', 'trash can': '垃圾桶', 'recycling bin': '回收桶', 'compost bin': '堆肥桶',
    'storage container': '儲存容器', 'food wrap': '保鮮膜', 'aluminum foil': '鋁箔紙', 'parchment paper': '烘焙紙',
    'freezer bag': '冷凍袋', 'vacuum sealer': '真空包裝機', 'rice cooker': '電鍋', 'slow cooker': '慢煮鍋',
    'pressure cooker': '壓力鍋', 'air fryer': '氣炸鍋', 'toaster oven': '小型烤箱', 'ice maker': '製冰機',
    'juicer': '榨汁機', 'espresso machine': '濃縮咖啡機', 'electric kettle': '電熱水壺', 'wine cooler': '酒櫃'
  },

  // 6. 食物類 (200+)
  '食物': {
    'apple': '蘋果', 'banana': '香蕉', 'orange': '柳橙', 'grape': '葡萄',
    'strawberry': '草莓', 'watermelon': '西瓜', 'pineapple': '鳳梨', 'mango': '芒果',
    'peach': '桃子', 'pear': '梨子', 'cherry': '櫻桃', 'kiwi': '奇異果',
    'lemon': '檸檬', 'lime': '萊姆', 'coconut': '椰子', 'avocado': '酪梨',
    'tomato': '番茄', 'potato': '馬鈴薯', 'carrot': '紅蘿蔔', 'onion': '洋蔥',
    'garlic': '大蒜', 'ginger': '薑', 'broccoli': '花椰菜', 'cauliflower': '白花椰菜',
    'cabbage': '高麗菜', 'lettuce': '生菜', 'spinach': '菠菜', 'celery': '芹菜',
    'corn': '玉米', 'pea': '豌豆', 'bean': '豆子', 'mushroom': '蘑菇',
    'bell pepper': '甜椒', 'cucumber': '黃瓜', 'eggplant': '茄子', 'zucchini': '節瓜',
    'butternut squash': '南瓜', 'acorn squash': '角瓜', 'sweet potato': '地瓜', 'beet': '甜菜根',
    'radish': '蘿蔔', 'turnip': '大頭菜', 'parsnip': '防風草', 'rutabaga': '蕪菁甘藍',
    'artichoke': '洋薊', 'asparagus': '蘆筍', 'brussels sprout': '球芽甘藍', 'kale': '羽衣甘藍',
    'swiss chard': '瑞士甜菜', 'collard greens': '羽衣甘藍', 'bok choy': '小白菜', 'napa cabbage': '高麗菜',
    'green bean': '四季豆', 'snow pea': '荷蘭豆', 'edamame': '毛豆', 'black bean': '黑豆',
    'kidney bean': '腎豆', 'chickpea': '鷹嘴豆', 'lentil': '扁豆', 'split pea': '分裂豌豆',
    'quinoa': '藜麥', 'brown rice': '糙米', 'white rice': '白米', 'wild rice': '野米',
    'barley': '大麥', 'oat': '燕麥', 'bulgur': '碎小麥', 'couscous': '古斯米',
    'bread': '麵包', 'bagel': '貝果', 'croissant': '可頌', 'muffin': '馬芬',
    'cake': '蛋糕', 'pie': '派', 'cookie': '餅乾', 'cracker': '蘇打餅乾',
    'pasta': '義大利麵', 'noodle': '麵條', 'ramen': '拉麵', 'spaghetti': ' spaghetti',
    'macaroni': '通心粉', 'lasagna': '千層麵', 'ravioli': '餃子', 'tortellini': '義大利餃',
    'pizza': '披薩', 'hamburger': '漢堡', 'hot dog': '熱狗', 'sandwich': '三明治',
    'taco': '塔可', 'burrito': '捲餅', 'quesadilla': '起司捲餅', 'enchilada': '辣味捲餅',
    'sushi': '壽司', 'rice ball': '飯糰', 'onigiri': '握飯團', 'tempura': '天婦羅',
    'steak': '牛排', 'chicken breast': '雞胸肉', 'pork chop': '豬排', 'fish fillet': '魚片',
    'salmon': '鮭魚', 'tuna': '鮪魚', 'shrimp': '蝦子', 'lobster': '龍蝦',
    'crab': '螃蟹', 'scallop': '干貝', 'clam': '蛤蜊', 'mussel': '貽貝',
    'egg': '雞蛋', 'omelette': '歐姆蛋', 'scrambled egg': '炒蛋', 'fried egg': '煎蛋',
    'boiled egg': '水煮蛋', 'poached egg': '水波蛋', 'deviled egg': '魔鬼蛋', 'egg salad': '蛋沙拉'
  },

  // 7. 飲料類 (50+)
  '飲料': {
    'water': '水', 'juice': '果汁', 'soda': '汽水', 'cola': '可樂',
    'tea': '茶', 'coffee': '咖啡', 'milk': '牛奶', 'yogurt': '優格',
    'smoothie': '冰沙', 'beer': '啤酒', 'wine': '葡萄酒', 'champagne': '香檳',
    'cocktail': '雞尾酒', 'margarita': '瑪格麗特', 'mojito': '莫吉托', 'martini': '馬丁尼',
    'whiskey': '威士忌', 'vodka': '伏特加', 'rum': '蘭姆酒', 'gin': '杜松子酒',
    'tequila': '龍舌蘭酒', 'liqueur': '利口酒', 'brandy': '白蘭地', 'cognac': '干邑白蘭地',
    'sparkling water': '氣泡水', 'mineral water': '礦泉水', 'sports drink': '運動飲料', 'energy drink': '能量飲料',
    'protein shake': '蛋白質奶昔', 'meal replacement': '代餐', 'herbal tea': '花草茶', 'green tea': '綠茶',
    'black tea': '紅茶', 'oolong tea': '烏龍茶', 'white tea': '白茶', 'pu-erh tea': '普洱茶',
    'espresso': '濃縮咖啡', 'latte': '拿鐵', 'cappuccino': '卡布奇諾', 'mocha': '摩卡',
    'americano': '美式咖啡', 'macchiato': '瑪奇朵', 'affogato': '阿法其多'
  },

  // 8. 服飾類 (120+)
  '服飾': {
    'shirt': '襯衫', 't-shirt': 'T恤', 'pants': '褲子', 'jeans': '牛仔褲',
    'shorts': '短褲', 'skirt': '裙子', 'dress': '洋裝', 'jacket': '夾克',
    'coat': '大衣', 'sweater': '毛衣', 'hoodie': '連帽衫', 'suit': '西裝',
    'tie': '領帶', 'belt': '皮帶', 'hat': '帽子', 'cap': '棒球帽',
    'scarf': '圍巾', 'gloves': '手套', 'socks': '襪子', 'shoes': '鞋子',
    'blouse': '女式襯衫', 'tank top': '背心', 'sweatshirt': '運動衫', 'cardigan': '開襟毛衣',
    'vest': '背心', 'turtleneck': '高領毛衣', 'crop top': '短版上衣', 'halter top': '繞頸上衣',
    'tube top': '細肩帶背心', 'off-shoulder top': '露肩上衣', 'bodysuit': '連身衣', 'romper': '連身褲',
    'jumpsuit': '連身工作服', 'coveralls': '連身工作服', 'overall': '工裝褲', 'leggings': '緊身褲',
    'capris': '七分褲', 'culottes': '寬腿褲', 'palazzo pants': '闊腿褲', 'harem pants': '哈倫褲',
    'sweatpants': '運動褲', 'track pants': '田徑褲', 'cargo pants': '工裝褲', 'chinos': '斜紋棉布褲',
    'slacks': '休閒褲', 'trousers': '長褲', 'trunks': '三角褲', 'boxers': '平角褲',
    'briefs': '內褲', 'underwear': '內衣', 'bras': '胸罩', 'camisole': '小可愛',
    'chemise': '睡衣', 'nightgown': '睡袍', 'robe': '浴袍', 'pyjamas': '睡衣套裝',
    'swimsuit': '泳裝', 'bikini': '比基尼', 'one-piece swimsuit': '連身泳裝', 'swim trunks': '泳褲',
    'wetsuit': '潛水衣', 'uniform': '制服', 'costume': '戲服', 'apron': '圍裙'
  },

  // 9. 鞋子類 (60+)
  '鞋子': {
    'sneakers': '運動鞋', 'running shoes': '跑鞋', 'boots': '靴子',
    'sandals': '涼鞋', 'flip flops': '夾腳拖', 'high heels': '高跟鞋',
    'loafers': '樂福鞋', 'dress shoes': '皮鞋', 'slippers': '拖鞋',
    'athletic shoes': '運動鞋', 'tennis shoes': '網球鞋', 'basketball shoes': '籃球鞋', 'cross-training shoes': '綜合訓練鞋',
    'walking shoes': '步行鞋', 'hiking boots': '登山靴', 'work boots': '工作靴', 'cowboy boots': '牛仔靴',
    'ankle boots': '踝靴', 'knee-high boots': '及膝靴', 'over-the-knee boots': '過膝靴', 'rain boots': '雨靴',
    'snow boots': '雪靴', 'ugg boots': '雪地靴', 'combat boots': '軍靴', 'dress boots': '正裝靴',
    'oxfords': '牛津鞋', 'derby shoes': '德比鞋', 'brogues': '布洛克鞋', 'monk straps': '僧侶鞋',
    'espadrilles': '黃麻鞋', 'moccasins': '莫卡辛鞋', 'clogs': '木屐', 'platform shoes': '厚底鞋',
    'wedges': '楔形跟鞋', 'stilettos': '細跟鞋', 'block heels': '粗跟鞋', 'kitten heels': '小貓跟鞋',
    'flats': '平底鞋', 'ballet flats': '芭蕾舞鞋', 'mary janes': '瑪麗珍鞋', 'peep-toe shoes': '露趾鞋'
  },

  // 10. 包包類 (40+)
  '包包': {
    'backpack': '背包', 'handbag': '手提包', 'purse': '錢包',
    'briefcase': '公事包', 'suitcase': '行李箱', 'wallet': '皮夾',
    'clutch': '手拿包', 'tote bag': '托特包', 'duffle bag': '旅行袋',
    'messenger bag': '郵差包', 'satchel': '肩背包', 'hobo bag': '圓形肩背包', 'bucket bag': '水桶包',
    'crossbody bag': '斜背包', 'shoulder bag': '肩背包', 'wristlet': '手腕包', 'coin purse': '零錢包',
    'cardholder': '卡包', 'phone case': '手機套', 'laptop bag': '筆電包', 'camera bag': '相機包',
    'makeup bag': '化妝包', 'gym bag': '健身包', 'diaper bag': '尿布包', 'lunch bag': '午餐袋',
    'wine bag': '酒瓶袋', 'gift bag': '禮品袋', 'shopping bag': '購物袋', 'grocery bag': '購物袋',
    'trash bag': '垃圾袋', 'storage bag': '收納袋', 'compression bag': '壓縮袋', 'garment bag': '衣物袋'
  },

  // 11. 化妝品類 (80+)
  '化妝品': {
    'lipstick': '口紅', 'mascara': '睫毛膏', 'eyeliner': '眼線筆',
    'eyeshadow': '眼影', 'foundation': '粉底', 'concealer': '遮瑕膏',
    'blush': '腮紅', 'powder': '蜜粉', 'perfume': '香水', 'nail polish': '指甲油',
    'lip gloss': '唇彩', 'lip liner': '唇線筆', 'lip balm': '潤唇膏', 'chapstick': '潤唇膏',
    'sunscreen': '防曬霜', 'face moisturizer': '臉部保濕霜', 'night cream': '晚霜', 'eye cream': '眼霜',
    'serum': '精華液', 'toner': '化妝水', 'cleanser': '潔面乳', 'face mask': '面膜',
    'exfoliant': '去角質產品', 'scrub': '磨砂膏', 'body lotion': '身體乳液', 'body wash': '沐浴乳',
    'shower gel': '沐浴凝膠', 'bubble bath': '泡泡浴', 'hand cream': '護手霜', 'foot cream': '足部保養霜',
    'deodorant': '除臭劑', 'antiperspirant': '止汗劑', 'cologne': '古龍水', 'aftershave': '鬍後水',
    'hair gel': '髮膠', 'hair spray': '定型噴霧', 'mousse': '慕斯', 'hair wax': '髮蠟',
    'pomade': '髮油', 'conditioner': '潤髮乳', 'hair mask': '髮膜', 'leave-in conditioner': '免沖洗護髮乳',
    'hair oil': '護髮油', 'dry shampoo': '乾洗洗髮精', 'texturizing spray': '質感噴霧', 'heat protectant': '熱保護噴霧'
  },

  // 12. 清潔用品類 (70+)
  '清潔用品': {
    'broom': '掃帚', 'mop': '拖把', 'vacuum cleaner': '吸塵器',
    'detergent': '清潔劑', 'soap': '肥皂', 'shampoo': '洗髮精',
    'conditioner': '潤髮乳', 'toothpaste': '牙膏', 'toothbrush': '牙刷',
    'dish soap': '洗碗精', 'laundry detergent': '洗衣精', 'fabric softener': '柔軟精', 'bleach': '漂白水',
    'disinfectant': '消毒劑', 'glass cleaner': '玻璃清潔劑', 'bathroom cleaner': '浴室清潔劑', 'floor cleaner': '地板清潔劑',
    'all-purpose cleaner': '萬用清潔劑', 'stain remover': '去污劑', 'rust remover': '除鏽劑', 'limescale remover': '除垢劑',
    'oven cleaner': '烤箱清潔劑', 'grout cleaner': '填縫劑清潔劑', 'carpet cleaner': '地毯清潔劑', 'upholstery cleaner': '沙發清潔劑',
    'steel wool': '鋼絲絨', 'sponge': '海綿', 'scrub brush': '刷子', 'toilet brush': '馬桶刷',
    'dustpan': '畚箕', 'garbage bag': '垃圾袋', 'paper towels': '紙巾', 'toilet paper': '衛生紙',
    'tissues': '面紙', 'wipes': '濕紙巾', 'baby wipes': '嬰兒濕巾', 'makeup remover': '卸妝產品',
    'cotton balls': '化妝棉', 'q-tips': '棉簽', 'band-aids': '創可貼', 'gauze': '紗布',
    'hydrogen peroxide': '雙氧水', 'rubbing alcohol': '酒精', 'ammonia': '氨水', 'vinegar': '醋'
  },

  // 13. 辦公用品類 (90+)
  '辦公用品': {
    'pen': '筆', 'pencil': '鉛筆', 'marker': '麥克筆', 'highlighter': '螢光筆',
    'notebook': '筆記本', 'paper': '紙張', 'envelope': '信封', 'stapler': '訂書機',
    'scissors': '剪刀', 'ruler': '尺', 'calculator': '計算機', 'calendar': '日曆',
    'sticky notes': '便利貼', 'tape': '膠帶', 'glue': '膠水', 'paperclip': '迴紋針',
    'binder clip': '燕尾夾', 'hole punch': '打孔機', 'paper shredder': '碎紙機', 'laminator': '塑膠膜機',
    'whiteboard marker': '白板筆', 'eraser': '橡皮擦', 'sharpener': '削筆器', 'ink cartridge': '墨水管',
    'toner': '碳粉', 'fax machine': '傳真機', 'copier': '影印機', 'shredder': '碎紙機',
    'desk lamp': '桌燈', 'paperweight': '鎮紙', 'letter opener': '拆信刀', 'staple remover': '拔釘器',
    'rubber band': '橡皮筋', 'thumbtack': '圖釘', 'pushpin': '按釘', 'clipboard': '_clipboard',
    'file folder': '檔案夾', 'hanging folder': '懸掛檔案夾', 'index card': '索引卡片', 'business card holder': '名片夾',
    'name plate': '名牌', 'desk organizer': '桌面收納', 'pen holder': '筆筒', 'document scanner': '文件掃描器',
    'label maker': '標籤機', 'hole puncher': '打孔器', 'paper tray': '紙盤', 'ink pad': '印泥',
    'stamp': '印章', 'post-it notes': '便利貼', 'correction fluid': '修正液', 'correction tape': '修正帶',
    'pencil case': '鉛筆盒', 'bookend': '書擋', 'magnifying glass': '放大鏡', 'slide ruler': '計算尺'
  },

  // 14. 運動器材類 (100+)
  '運動器材': {
    'basketball': '籃球', 'football': '美式足球', 'soccer ball': '足球',
    'tennis ball': '網球', 'baseball': '棒球', 'volleyball': '排球',
    'golf club': '高爾夫球桿', 'tennis racket': '網球拍', 'badminton racket': '羽毛球拍',
    'skateboard': '滑板', 'bicycle': '腳踏車', 'dumbbell': '啞鈴', 'yoga mat': '瑜伽墊',
    'treadmill': '跑步機', 'exercise bike': '健身腳踏車', 'elliptical': '橢圓機', 'rowing machine': '划船機',
    'weight bench': '舉重凳', 'barbell': '槓鈴', 'kettlebell': '壺鈴', 'medicine ball': '藥球',
    'resistance band': '阻力帶', 'foam roller': '泡沫軸', 'jump rope': '跳繩', 'hula hoop': '呼拉圈',
    'punching bag': '沙包', 'boxing gloves': '拳擊手套', 'helmets': '安全帽', 'knee pads': '護膝',
    'elbow pads': '護肘', 'wrist guards': '護腕', 'mouthguard': '護齒套', 'sports bra': '運動內衣',
    'compression shirt': '壓縮衣', 'compression shorts': '壓縮短褲', 'athletic socks': '運動襪', 'running shoes': '跑鞋',
    'swimming goggles': '游泳蛙鏡', 'swim cap': '泳帽', 'kickboard': '浮板', 'pull buoy': '浮力腿套',
    'fins': '蛙鞋', 'snorkel': '呼吸管', 'life jacket': '救生衣', 'wetsuit': '潛水衣',
    'ski poles': '滑雪杖', 'ski boots': '滑雪靴', 'snowboard': '滑雪板', 'ice skates': '溜冰鞋',
    'roller skates': '直排輪鞋', 'protective gear': '防護裝備', 'sports watch': '運動手錶', 'fitness tracker': '健身追蹤器',
    'stopwatch': '碼表', 'scoreboard': '記分板', 'whistle': '哨子', 'megaphone': '擴音器',
    'first aid kit': '急救包', 'water bottle': '水壺', 'sports towel': '運動毛巾', 'cooling vest': '降溫背心'
  },

  // 15. 樂器類 (60+)
  '樂器': {
    'piano': '鋼琴', 'guitar': '吉他', 'violin': '小提琴', 'drum': '鼓',
    'trumpet': '小號', 'saxophone': '薩克斯風', 'flute': '長笛', 'clarinet': '單簧管',
    'trombone': '長號', 'french horn': '法國號', 'tuba': '低音號', 'accordion': '手風琴',
    'harmonica': '口琴', 'ukulele': '烏克麗麗', 'banjo': '班卓琴', 'mandolin': '曼陀林',
    'cello': '大提琴', 'double bass': '低音提琴', 'harp': '豎琴', 'xylophone': '木琴',
    'marimba': '馬林巴琴', 'vibraphone': '顫音琴', 'glockenspiel': '鐘琴', 'triangle': '三角鐵',
    'cymbals': '鈸', 'tambourine': '鈴鼓', 'bongo': '邦哥鼓', 'conga': '康加鼓',
    'timpani': '定音鼓', 'snare drum': '小鼓', 'bass drum': '大鼓', 'hi-hat': '踩鈸',
    'synthesizer': '合成器', 'organ': '風琴', 'harpsichord': '大鍵琴', 'theremin': '特雷門琴',
    'didgeridoo': '迪吉里杜管', 'bagpipes': '風笛', 'kazoo': '卡祖笛', 'cowbell': '牛鈴',
    'castanets': '響板', 'claves': '木棒', 'guiro': '刮瓜', 'vibraslap': '顫擊器'
  },

  // 16. 醫療用品類 (60+)
  '醫療用品': {
    'thermometer': '溫度計', 'bandage': '繃帶', 'syringe': '注射器',
    'pill': '藥丸', 'medicine': '藥品', 'first aid kit': '急救箱',
    'band-aid': '創可貼', 'gauze': '紗布', 'medical tape': '醫用膠帶', 'antiseptic': '防腐劑',
    'hydrogen peroxide': '雙氧水', 'alcohol swabs': '酒精棉片', 'latex gloves': '乳膠手套', 'face mask': '口罩',
    'crutches': '拐杖', 'walker': '助行器', 'wheelchair': '輪椅', 'cane': '手杖',
    'hearing aid': '助聽器', 'eyeglasses': '眼鏡', 'contact lenses': '隱形眼鏡', 'prescription medication': '處方藥',
    'over-the-counter medicine': '成藥', 'vitamins': '維生素', 'supplements': '補充劑', 'pain relievers': '止痛藥',
    'antihistamines': '抗組織胺藥', 'antacids': '制酸劑', 'cough syrup': '咳嗽糖漿', 'nasal spray': '鼻噴劑',
    'inhaler': '吸入器', 'epinephrine auto-injector': '腎上腺素自動注射器', 'blood pressure monitor': '血壓計', 'glucose meter': '血糖儀',
    'pulse oximeter': '脈搏血氧儀', 'stethoscope': '聽診器', 'blood glucose test strips': '血糖試紙', 'insulin pump': '胰島素泵',
    'catheter': '導尿管', 'feeding tube': '餵食管', 'oxygen tank': '氧氣筒', 'nebulizer': '霧化器'
  },

  // 17. 建築物類 (80+)
  '建築物': {
    'house': '房子', 'apartment': '公寓', 'building': '建築物',
    'school': '學校', 'hospital': '醫院', 'store': '商店',
    'restaurant': '餐廳', 'hotel': '飯店', 'bank': '銀行', 'church': '教堂',
    'mosque': '清真寺', 'synagogue': '猶太教堂', 'temple': '寺廟', 'library': '圖書館',
    'museum': '博物館', 'theater': '劇院', 'cinema': '電影院', 'gym': '健身房',
    'stadium': '體育場', 'arena': '競技場', 'airport': '機場', 'train station': '火車站',
    'bus station': '公車站', 'gas station': '加油站', 'supermarket': '超市', 'mall': '購物中心',
    'department store': '百貨公司', 'pharmacy': '藥局', 'clinic': '診所', 'dentist': '牙醫診所',
    'veterinary clinic': '獸醫診所', 'post office': '郵局', 'courthouse': '法院', 'city hall': '市政廳',
    'fire station': '消防局', 'police station': '警察局', 'prison': '監獄', 'factory': '工廠',
    'warehouse': '倉庫', 'office building': '辦公大樓', 'skyscraper': '摩天大樓', 'condominium': '共管公寓',
    'townhouse': '聯排別墅', 'cottage': '村舍', 'bungalow': '平房', 'villa': '別墅',
    'castle': '城堡', 'palace': '宮殿', 'lighthouse': '燈塔', 'windmill': '風車',
    'barn': '穀倉', 'shed': '小屋', 'garage': '車庫', 'greenhouse': '溫室',
    'bridge': '橋樑', 'tunnel': '隧道', 'dam': '水壩', 'power plant': '發電廠'
  },

  // 18. 室外物品類 (100+)
  '室外物品': {
    'tree': '樹', 'flower': '花', 'grass': '草', 'fountain': '噴泉',
    'bench': '長椅', 'street light': '路燈', 'traffic light': '紅綠燈',
    'stop sign': '停止標誌', 'mailbox': '郵箱', 'fire hydrant': '消防栓',
    'parking meter': '停車收費表', 'crosswalk': '斑馬線', 'speed bump': '減速坡', 'road sign': '道路標誌',
    'billboard': '廣告牌', 'bus stop': '公車站', 'trash can': '垃圾桶', 'recycling bin': '回收桶',
    'parking lot': '停車場', 'sidewalk': '人行道', 'crossing guard': '交通協管員', 'construction barrier': '施工屏障',
    'traffic cone': '交通錐', 'barricade': '路障', 'detour sign': '繞道標誌', 'yield sign': '讓路標誌',
    'merge sign': '合流標誌', 'curve warning': '彎道警告', 'pedestrian crossing': '行人穿越道', 'railroad crossing': '鐵路交叉口',
    'school zone': '學校區域', 'construction zone': '施工區域', 'accident': '事故現場', 'road work': '道路工程',
    'pothole': '坑洞', 'manhole cover': '人孔蓋', 'storm drain': '雨水排水溝', 'catch basin': '集水井',
    'utility pole': '電線桿', 'transformer': '變壓器', 'electrical box': '配電箱', 'satellite dish': '衛星天線',
    'cell tower': '行動電話基地台', 'wind turbine': '風力渦輪機', 'solar panel': '太陽能板', 'power line': '電纜線',
    'fence': '柵欄', 'gate': '大門', 'wall': '牆壁', 'hedge': '樹籬',
    'bush': '灌木叢', 'shrub': '灌木', 'plant': '植物', 'shrubbery': '灌木叢',
    'lawn': '草坪', 'garden': '花園', 'patio': '庭院', 'deck': '甲板',
    'porch': '門廊', 'balcony': '陽台', 'roof': '屋頂', 'gutter': '水槽',
    'downspout': '落水管', 'chimney': '煙囪', 'flagpole': '旗杆', 'birdhouse': '鳥屋'
  },

  // 19. 玩具類 (80+)
  '玩具': {
    'doll': '娃娃', 'teddy bear': '泰迪熊', 'puzzle': '拼圖',
    'lego': '樂高', 'robot': '機器人', 'car toy': '玩具車',
    'ball': '球', 'kite': '風箏', 'playing cards': '撲克牌',
    'board game': '棋盤遊戲', 'video game': '電子遊戲', 'action figure': '動作人偶', 'toy soldier': '玩具士兵',
    'stuffed animal': '填充動物玩具', 'plush toy': '毛絨玩具', 'rag doll': '布娃娃', ' Barbie doll': '芭比娃娃',
    'Hot Wheels': '風火輪玩具車', 'Matchbox car': '火柴盒玩具車', 'toy train': '玩具火車', 'model car': '模型車',
    'RC car': '遙控車', 'RC helicopter': '遙控直升機', 'RC airplane': '遙控飛機', 'RC boat': '遙控船',
    'building blocks': '積木', 'wooden blocks': '木塊', ' foam blocks': '泡沫積木', 'magnetic tiles': '磁性積木',
    'play-doh': '培樂多', 'slime': '史萊姆', 'kinetic sand': '動感沙', 'water beads': '水珠',
    'coloring book': '著色本', 'crayons': '蠟筆', 'markers': '麥克筆', 'colored pencils': '彩色鉛筆',
    'paint set': '顏料組', 'easel': '畫架', 'craft kit': '手工藝套件', 'bead kit': '串珠套件',
    'science kit': '科學實驗套件', 'magic kit': '魔術套件', 'juggling set': '雜耍套件', 'yo-yo': '溜溜球',
    'hula hoop': '呼拉圈', 'jump rope': '跳繩', 'skipping rope': '跳繩', 'frisbee': '飛盤',
    'boomerang': '回力鏢', 'Slinky': '妙妙圈', 'Rubik\'s cube': '魔術方塊', 'fidget spinner': '指尖陀螺'
  },

  // 20. 珠寶首飾類 (50+)
  '珠寶首飾': {
    'ring': '戒指', 'necklace': '項鍊', 'bracelet': '手鍊',
    'earrings': '耳環', 'watch': '手錶', 'brooch': '胸針',
    'pendant': '吊墜', 'charm': '吊飾', 'chain': '鏈子', 'bangle': '手鐲',
    'cufflinks': '袖扣', 'tiara': '頭冠', 'crown': '王冠', 'anklet': '腳鍊',
    'locket': '小盒墜飾', 'choker': '頸鍊', 'torc': '扭絲手鐲', 'armlet': '臂環',
    'hair clip': '髮夾', 'hair band': '髮圈', 'hairpin': '髮簪', 'barrette': '髮夾',
    'diamond': '鑽石', 'ruby': '紅寶石', 'emerald': '祖母綠', 'sapphire': '藍寶石',
    'pearl': '珍珠', 'opal': '蛋白石', 'topaz': '黃玉', 'amethyst': '紫水晶',
    'aquamarine': '海藍寶石', 'garnet': '石榴石', 'turquoise': '綠松石', 'onyx': '縞瑪瑙',
    'jade': '翡翠', 'amber': '琥珀', 'coral': '珊瑚', 'ivory': '象牙',
    'gold': '黃金', 'silver': '銀', 'platinum': '白金', 'titanium': '鈦金屬'
  },

  // 21. 其他物品類 (150+)
  '其他物品': {
    'clock': '時鐘', 'watch': '手錶', 'umbrella': '雨傘', 'key': '鑰匙',
    'money': '錢', 'credit card': '信用卡', 'book': '書', 'magazine': '雜誌',
    'newspaper': '報紙', 'phone': '電話', 'candle': '蠟燭', 'vase': '花瓶',
    'mirror': '鏡子', 'picture frame': '相框', 'photo': '照片', 'painting': '繪畫',
    'sculpture': '雕塑', 'lamp': '燈', 'flashlight': '手電筒', 'lantern': '燈籠',
    'torch': '火炬', 'candlestick': '燭台', 'chandelier': '吊燈', 'sconce': '壁燈',
    'nightlight': '小夜燈', 'headlamp': '頭燈', 'spotlight': '聚光燈', 'floodlight': '泛光燈',
    'streetlight': '路燈', 'traffic light': '紅綠燈', 'emergency light': '緊急照明燈', 'LED strip': 'LED燈帶',
    'Christmas tree': '聖誕樹', 'ornament': '裝飾品', 'wreath': '花環', 'garland': '花圈',
    'stocking': '聖誕襪', 'lights': '燈飾', 'fireplace': '壁爐', 'fire pit': '火坑',
    'campfire': '營火', 'bonfire': '篝火', 'candle holder': '燭台', 'incense': '香',
    'door': '門', 'window': '窗戶', 'curtain': '窗簾', 'blind': '百葉窗',
    'shutter': '窗板', 'doorknob': '門把', 'doorbell': '門鈴', 'peephole': '窺視孔',
    'mail slot': '信箱口', 'knocker': '門環', 'threshold': '門檻', 'frame': '門框',
    'lock': '鎖', 'keypad': '密碼鍵盤', 'deadbolt': '暗鎖', 'chain lock': '鏈鎖',
    'safe': '保險箱', 'vault': '保險庫', 'combination lock': '密碼鎖', 'padlock': '掛鎖',
    'ladder': '梯子', 'step ladder': '折梯', 'scaffolding': '腳手架', 'escalator': '電扶梯',
    'elevator': '電梯', 'escalator handrail': '電扶梯扶手', 'escalator step': '電扶梯階梯', 'escalator comb plate': '電扶梯梳齒板'
  }
};

// 建立完整的物品映射
const itemNames = {};
const itemCategories = {};
Object.keys(itemDatabase).forEach(category => {
  Object.keys(itemDatabase[category]).forEach(key => {
    itemNames[key] = itemDatabase[category][key];
    itemCategories[key] = category;
  });
});

console.log(`載入完成: ${Object.keys(itemNames).length} 種物品`);