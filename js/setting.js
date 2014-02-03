/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率
Taxes.capitaBasis = 3000; //均等割 平成25年度

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'nomi_budget';
OpenSpending.year = '2013';

/*
var tooltipTitles = {
  '議会・市役所': '議会費・総務費',
  '教育': '教育費',
  '福祉': '民生費',
  '商工労働・観光': '商工費・労働費',
  'インフラ': '土木費',
  '環境': '衛生費',
  '防災': '消防費・災害復旧費',
  '農業': '農林水産業費',
  '借金の返済': '公債費',
  'その他': '諸支出費・予備費',
  '総務管理費': '市長部局の一般事務に必要な費用',
  '徴税費': '市税など税金の徴収に必要な費用',
  '議会費': '議員報酬など、市議会活動や議会運営に必要な費用',
  '戸籍住民台帳費': '出生、死亡、転出入など住民登録に必要な費用',
  '選挙費': '選挙の管理、監督に必要な費用',
  '監査委員費': '市の歳出や事業運営の監査に必要な費用',
  '統計調査費': '国勢調査や統計調査などに必要な費用',
  '社会教育費': '青少年教育、生涯学習、文化振興などに必要な費用',
  '小学校費': '小学校の維持管理に必要な費用',
  '中学校費': '中学校の維持管理に必要な費用',
  '教育総務費': '教育委員会の一般事務に必要な費用',
  '保健体育費': 'スポーツ振興などに必要な費用',
  '児童福祉費': '保育、児童、ひとり親家庭などの支援に必要な費用',
  '社会福祉費': '障がい者、高齢者などの支援に必要な費用',
  '生活保護費': '生活保護世帯の支援に必要な費用',
  '商工費': '商業、工業、観光などの振興に必要な費用',
  '労働諸費': '勤労者支援などに必要な費用',
  '都市計画費': '都市計画道路、公園などの維持管理に必要な費用',
  '道路橋梁費': '道路の舗装修繕、除雪などに必要な費用',
  '住宅費': '市営住宅の維持管理に必要な費用',
  '河川費': '河川、水路の改修などの維持管理に必要な費用',
  '土木管理費': '道路台帳の管理事務などに必要な費用',
  '保健衛生費': '予防接種、健康の推進などに必要な費用',
  '清掃費': 'ゴミの処理、資源の収集などに必要な費用',
  '消防費': '消防施設の維持管理、消防団員の支援などに必要な費用',
  '公共土木施設災害復旧費': '土木施設の災害時に必要な費用（予備）',
  '農林水産業施設災害復旧費': '農業施設の災害時に必要な費用（予備）',
  '農業費': '農業の振興などに必要な費用',
  '公債費': '市債などの借り入れ金の利子',
  '予備費': '予備費',
  '普通財産取得費': '公共用地取得時に必要な費用（予備）'
};
*/

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* nomi city cofog */
  '1': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#935B3B' },
  '101': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#0AB971' },
  '102': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },
  '103': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },
  '104': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '105': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#0AB971' },
  '106': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#0AB971' },
  '107': { icon: 'icons/police.svg', color: '#C75746', bcolor: '#0AB971' },
   '3': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#4E6D00' },
  '108': { icon: 'icons/c_fukushi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '109': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#4E6D00' },
  '110': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '111': { icon: 'icons/foreign-military-aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '112': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '113': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#D33673' },
  '114': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '115': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '116': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#EC2406' },
  '117': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '118': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#EC2406' },

  '7': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#938626' },
'119': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#938626' },

  '8': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '120': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '121': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '122': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '123': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#C75746' },
  '124': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#FF0000' },
  '125': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#FF0000' },
  '10': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '126': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#790586' },
 '127': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' }, 
 '128': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' }, 
 '129': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
 '130': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#867905' },
  '131': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#867905' },  '12': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#FFD700' },
  '132': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#FFD700' },  '13': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#FFA500' },
  '133': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#FFA500' },
  '134': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#FFA500' },
  '14': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#556B2F' },
  '135': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#556B2F' }
};


