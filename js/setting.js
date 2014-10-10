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
  '1' : { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#0A8BC7' }, //健康福祉
  '11': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0A8BC7' },  //民生費
  '12': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#0A8BC7' },           //衛生費
  '13': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#0A8BC7' },    //労働費

  '2' : { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#C7A40A' }, //公債
  '21': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#C7A40A' },   //公債費

  '3' : { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#09C746' }, //街づくり
  '31': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#09C746' },          //土木費
  '32': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#09C746' },       //災害復旧費

  '4' : { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#C7460A' }, //教育
  '41': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#C7460A' },   //教育費

  '5' : { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#0A2DC7' },    //政策
  '51': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#0A2DC7' },          //議会費
  '52': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0A2DC7' },   //総務費

  '6' : { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#C70A8B' }, //商工
  '61': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#C70A8B' },   //商工費

  '7' : { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#2DC70A' }, //農林水産
  '71': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#2DC70A' },   //農林水産費

  '8' : { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#C70A2D' }, //消防
  '81': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#C70A2D' },   //消防費

  '9' : { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#A40AC7' }, //その他
  '91': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#A40AC7' },     //諸支出金
  '92': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#A40AC7' },           //予備費
};
