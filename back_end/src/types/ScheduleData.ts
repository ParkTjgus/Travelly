export interface ScheduleData {
  id?: string; // 생성 시 내부적으로 할당됨
  startDate: string;
  startTime: string;
  endTime: string;
  content: string;
  price: number;
}
