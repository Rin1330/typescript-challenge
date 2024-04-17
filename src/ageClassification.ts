/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 * 
 * 
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

export function classifyAge(age: number):string {
    // 請在此處寫下你的程式碼
    let group;
    switch (true) {
      case (age > 0 && age < 12):
        group = 'Child'
        break;
      case (age <= 17 && age >= 13):
        group = 'Teenager'
        break;
      case (age <= 64 && age >= 18):
        group = 'Adult'
        break;
      case (age > 65):
          group = 'Senior'
          break;
      default:
        group = '外星人';
    }
    return group
}

classifyAge(-30)
classifyAge(3)
classifyAge(80)
classifyAge(15)