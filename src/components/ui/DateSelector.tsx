import DatePicker, { getToday} from 'react-native-modern-datepicker';
import { View, Dimensions } from "react-native";

type Props = {
    onSelectDate: (date: string) => void;
};

const DateSelector = ({onSelectDate} : Props) => {
    const {width, height} = Dimensions.get("window");
    const today = getToday();

    return (
        <View>
            <DatePicker
                mode="calendar"
                options={{
                    backgroundColor: "#ebe6e6ff",
                    textHeaderColor: "#800909ff",
                    textDefaultColor: "#000000ff",
                    selectedTextColor: "#ffffffff",
                    mainColor: "#8a000093",
                    textSecondaryColor: "#420000ff",
                    borderColor: "rgba(110, 108, 108, 0.25)",
                    textFontSize: 13,
                    textHeaderFontSize: 14
                }}
                style={{borderRadius:15, width: width * 0.60, height: "auto", position:"absolute", zIndex: 1}}
                isGregorian={true}
                minimumDate={today}
                onSelectedChange={(date)=> { 
                    onSelectDate(date)
                }}
            />
        </View>
    );
}
export default DateSelector;