import { helper } from '@ember/component/helper';

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType(propertyType: any): string{
  // export function rentalPropertyType([propertyType]: any[]): any{
  // let isCommunity: boolean = false;
  // console.log(`Property Type = ${[propertyType]}`);
  let rentalType: string = "";
  rentalType = (communityPropertyTypes.indexOf(propertyType) >= 0)?
  // rentalType = communityPropertyTypes.includes(propertyType)?
    "Community": "Standalone";

    return rentalType;
}
export default helper(rentalPropertyType);
