import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function Seletor({ data, search, placeholder }) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#F2B707' }]}
        containerStyle={{ backgroundColor: "black" }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={{ color: "white" }}
        activeColor='#E0C200'
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search ? true : false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Pesquise..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
            setValue(item.value);
            setIsFocus(false);
        }}
    />
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: '#E0C200',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#b08504',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});