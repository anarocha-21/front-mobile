import {View, Dimensions, TouchableOpacity, TextComponent} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import TextField from "../ui/TextField";
import { useState } from "react";


const RenderExplorer = () =>  {

    const[checkIn, setCheckIn] = useState("");
    const[checkOut, setCheckOut] = useState("");
    const[calendar, setCalendar] = useState < "checkin" | "checkout" >();

    return (
        <AuthContainer>
        {/*children*/}
            <View>
                <TouchableOpacity onPress={() => setCalendar("checkin")}>
                    <TextField
                        label="Check-in"
                        icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                        placeholder="selecione uma data"
                        value= {checkIn}
                    />
                </TouchableOpacity>
                {/*<DateSelector/> */}
                    
                {calendar === "checkin" && (
                    <DateSelector
                    onSelectDate={(date) =>
                        setCheckIn(date)
                    }/>
                )}

                <TouchableOpacity onPress={() => setCalendar("checkout")}>
                    <TextField
                        label="Check-out"
                        icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                        placeholder="selecione uma data"
                        value={checkOut}
                    />
                </TouchableOpacity>

                {/*<DateSelector/> */}
                {calendar === "checkout" && (
                    <DateSelector
                    onSelectDate={(date) =>
                        setCheckOut(date)
                    }/>
                )}

            </View>
        </AuthContainer>
    );
}
export default RenderExplorer;