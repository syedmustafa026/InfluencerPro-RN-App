import * as React from 'react';
import { Chip } from 'react-native-paper';

import * as colors from "../utilities/colors"

const ChipComponent = ({ name }) => (
    <Chip
        style={{
            marginHorizontal: 3,
            marginVertical:8,
            backgroundColor: colors.gray100,
            borderColor: colors.black,
            borderWidth: 1,
            width:"90%",
            alignSelf:'center'
        }}
        mode='outlined'
        closeIcon={"chevron-down"}
    >{name}
    </Chip>
);

export default ChipComponent;