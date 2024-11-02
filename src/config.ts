// 👇 constant value in all uppercase
export const FREE_QUOTA = {
    maxEventsPerMonth: 100,
    maxEventCategories: 5,
  } as const
  
  export const PRO_QUOTA = {
    maxEventsPerMonth: 2000,
    maxEventCategories: 20,
  } as const