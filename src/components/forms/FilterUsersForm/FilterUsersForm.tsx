import React from "react";
import styles from "./FilterUsersForm.module.scss";
import { Select, TextInput } from "@mantine/core";
import { inputStyles2 } from "@/utils/other/inputStyles";
import { DateInput } from "@mantine/dates";
import Calender from "@/components/illustrations/icons/Calender/Calender";

const FilterUsersForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Select
          label={<span className={styles.label}>Organization</span>}
          placeholder="Select"
          color="cyan"
          data={
            [
              // { label: "Lendsqr", value: "lendsqr" },
              // { label: "Irorun", value: "Irorun" },
            ]
          }
          styles={inputStyles2}
        />
      </div>
      <div>
        <TextInput
          label={<span className={styles.label}>Username</span>}
          placeholder="User"
          styles={inputStyles2}
        />
      </div>
      <div>
        <TextInput
          label={<span className={styles.label}>Email</span>}
          placeholder="User"
          styles={inputStyles2}
        />
      </div>
      <div>
        <DateInput
          label={<span className={styles.label}>Date</span>}
          placeholder="Date"
          styles={inputStyles2}
          rightSection={<Calender />}
        />
      </div>
      <div>
        <TextInput
          label={<span className={styles.label}>Phone Number</span>}
          placeholder="Phone Number"
          styles={inputStyles2}
        />
      </div>
      <div>
        <Select
          label={<span className={styles.label}>Status</span>}
          placeholder="Select"
          color="cyan"
          data={
            [
              // { label: "Lendsqr", value: "lendsqr" },
              // { label: "Irorun", value: "Irorun" },
            ]
          }
          styles={inputStyles2}
        />
      </div>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.btnReset}`}>
          <span>Reset</span>
        </button>
        <button className={`${styles.btn} ${styles.btnFilter}`}>
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterUsersForm;
