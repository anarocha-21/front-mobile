import DatePicker, { getFormatedDate, getToday } from 'react-native-modern-datepicker';
import { useState} from "react";
import { View, Text } from "react-native";

type Props = {
    label?: string;
}

const DateSelector = ({label}: Props) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() +1);
    const startDate = getFormatedDate(tomorrow, "YYYY/MM/DD h:m")

    const [selectDate, setSelectedDate] = useState ("");
    return (
        <View>
            {!!label && 
            <Text>{label}</Text>}
            <DatePicker
                mode="calendar"
                options={{
                    backgroundColor: "#ebe6e6ff",
                    textHeaderColor: "#800909ff",
                    textDefaultColor: "#000000ff",
                    selectedTextColor: "#000000ff",
                    mainColor: "#8a000044",
                    textSecondaryColor: "#420000ff",
                    borderColor: "rgba(110, 108, 108, 0.25)"
                }}
                style={{borderRadius:15}}
                isGregorian={true}
                minimumDate={startDate}
                selected={selectDate}
                onSelectedChange={date=>setSelectedDate(date)}
            />
        </View>
    );
}
export default DateSelector;