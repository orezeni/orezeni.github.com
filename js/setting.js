/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'tsuyama-budget';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* tsuyama cofog */
  '1' : { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#0AB971' }, //健康福祉
  '11': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },  //民生費
  '12': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#0AB971' },           //衛生費
  '13': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#0AB971' },    //労働費

  '2' : { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#F8E716' }, //公債
  '21': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#F8E716' },   //公債費

  '3' : { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#4E6D00' }, //街づくり
  '31': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#4E6D00' },          //土木費
  '32': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#4E6D00' },       //災害復旧費

  '4' : { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' }, //教育
  '41': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' },   //教育費

  '5' : { icon: 'icons/government.svg', color: '#C75746', bcolor: '#2A3A03' },    //政策
  '51': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#2A3A03' },          //議会費
  '52': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#2A3A03' },   //総務費

  '6' : { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#EC2406' }, //商工
  '61': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#EC2406' },   //商工費

  '7' : { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#938626' }, //農林水産
  '71': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#938626' },   //農林水産費

  '8' : { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#C75746' }, //消防
  '81': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#C75746' },   //消防費

  '9' : { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, //その他
  '91': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' },     //諸支出金
  '92': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },           //予備費
};
