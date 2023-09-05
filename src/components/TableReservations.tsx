import { ChangeEvent, FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import sv from 'date-fns/locale/sv';
registerLocale('sv', sv)
import "react-datepicker/dist/react-datepicker.css";

export const TableReservations = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [customerAmount, setCustomerAmount] = useState<number>(1);

  const getAvaliableTables = (e: FormEvent) => {
    e.preventDefault();
    console.log('tables for ' + customerAmount + ' at ' + startDate.getDay() + '/' + startDate.getMonth() + '-' + startDate.getFullYear());
    
  }

  return (
    <section>
      <form onSubmit={getAvaliableTables}>
        <div>
          <span>Datum: </span>
          <DatePicker
            selected={startDate}
            locale="sv"
            onChange={(date) => {
              if (date === null) {
                return;
              }
              setStartDate(date);
            }}
          />
        </div>
        <label>
          <span>Antal i sällskapet: </span>
          <input
            type="number"
            min="1"
            max="6"
            value={customerAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomerAmount(+e.target.value)}
          />
        </label>
        <button>Sök efter lediga bord</button>
      </form>
    </section>
  );
}