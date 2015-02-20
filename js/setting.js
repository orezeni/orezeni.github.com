/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率
Taxes.capitaBasis = 3500; //均等割 平成25年度

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'nomi_budget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
/* nomi city cofog */
   '1': { icon: 'icons/legislative.svg', color: '#ff9d00', bcolor: '#935B3B' },
  '101': { icon: 'icons/legislative.svg', color: '#ff9d00', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '201': { icon: 'icons/publicaffairs.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '202': { icon: 'icons/dollar.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '203': { icon: 'icons/economy-tourism.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '204': { icon: 'icons/publicaffairs.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '205': { icon: 'icons/civil-defence.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '206': { icon: 'icons/publicaffairs.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '207': { icon: 'icons/human-resources.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '208': { icon: 'icons/misc-services.svg', color: '#ff9d00', bcolor: '#0AB971' },
  '3': { icon: 'icons/order-safety.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '301': { icon: 'icons/old-age.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '302': { icon: 'icons/unemployment.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '303': { icon: 'icons/pre-school.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '304': { icon: 'icons/aid.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '305': { icon: 'icons/economic-aid.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '306': { icon: 'icons/medical-supplies.svg', color: '#ff9d00', bcolor: '#4E6D00' },
  '4': { icon: 'icons/health.svg', color: '#ff9d00', bcolor: '#D33673' },
  '401': { icon: 'icons/other-medical.svg', color: '#ff9d00', bcolor: '#D33673' },
  '402': { icon: 'icons/waste.svg', color: '#ff9d00', bcolor: '#D33673' },
  '403': { icon: 'icons/environment.svg', color: '#ff9d00', bcolor: '#D33673' },
  '5': { icon: 'icons/civilian-action.svg', color: '#ff9d00', bcolor: '#2A3A03' },
  '501': { icon: 'icons/environment-admin.svg', color: '#ff9d00', bcolor: '#2A3A03'  },
  '502': { icon: 'icons/forest.svg', color: '#ff9d00', bcolor: '#2A3A03'  },
  '503': { icon: 'icons/harbor.svg', color: '#ff9d00', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/traffic-watersup.svg', color: '#ff9d00', bcolor: '#EC2406' },
  '601': { icon: 'icons/traffic-watersup.svg', color: '#ff9d00', bcolor: '#EC2406' },
  '602': { icon: 'icons/transport.svg', color: '#ff9d00', bcolor: '#EC2406' },
  '7': { icon: 'icons/coal.svg', color: '#ff9d00', bcolor: '#938626' },
  '701': { icon: 'icons/coal.svg', color: '#ff9d00', bcolor: '#938626' },
  '702': { icon: 'icons/farms.svg', color: '#ff9d00', bcolor: '#938626' },
  '703': { icon: 'icons/harbor.svg', color: '#ff9d00', bcolor: '#938626' },
  '704': { icon: 'icons/government.svg', color: '#ff9d00', bcolor: '#938626' },
  '705': { icon: 'icons/government-uk.svg', color: '#ff9d00', bcolor: '#938626' },
  '706': { icon: 'icons/sports.svg', color: '#ff9d00', bcolor: '#938626' },
  '707': { icon: 'icons/water.svg', color: '#ff9d00', bcolor: '#938626' },
  '708': { icon: 'icons/housing.svg', color: '#ff9d00', bcolor: '#938626' },
  '8': { icon: 'icons/order-safety.svg', color: '#ff9d00', bcolor: '#C75746' },
  '801': { icon: 'icons/order-safety.svg', color: '#ff9d00', bcolor: '#C75746' },
  '9': { icon: 'icons/schools.svg', color: '#ff9d00', bcolor: '#D33673' },
  '901': { icon: 'icons/publicaffairs.svg', color: '#ff9d00', bcolor: '#D33673' },
  '902': { icon: 'icons/pre-school.svg', color: '#ff9d00', bcolor: '#D33673' },
  '903': { icon: 'icons/secondary-lower.svg', color: '#ff9d00', bcolor: '#D33673' },
  '904': { icon: 'icons/secondary-upper.svg', color: '#ff9d00', bcolor: '#D33673' },
  '905': { icon: 'icons/family2.svg', color: '#ff9d00', bcolor: '#D33673' },
  '906': { icon: 'icons/planning.svg', color: '#ff9d00', bcolor: '#D33673' },
  '907': { icon: 'icons/sports.svg', color: '#ff9d00', bcolor: '#D33673' },
  '10': { icon: 'icons/admin-order-safety.svg', color: '#ff9d00', bcolor: '#790586' },
  '1001': { icon: 'icons/economic-aid.svg', color: '#ff9d00', bcolor: '#790586' },
  '11': { icon: 'icons/public-debt.svg', color: '#ff9d00', bcolor: '#790586' },
  '1101': { icon: 'icons/public-debt.svg', color: '#ff9d00', bcolor: '#790586' },
  '12': { icon: 'icons/financial-admin.svg', color: '#ff9d00', bcolor: '#790586' },
  '1201': { icon: 'icons/financial-admin.svg', color: '#ff9d00', bcolor: '#790586' },
  '13': { icon: 'icons/money.svg', color: '#ff9d00', bcolor: '#790586' },
  '1301': { icon: 'icons/money.svg', color: '#ff9d00', bcolor: '#790586' }
};


