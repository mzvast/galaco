import * as React from 'react';
import {withTheme} from '../../styled';
import {Box, Flex} from '../../';

export type PaletteColorProps = {
    palette: string;
    theme: {palette: any};
};

const PaletteColor: React.FunctionComponent<PaletteColorProps> = ({
    palette,
    theme,
    ...props
}) => {
    return (
        <Box border="shadow">
            <Flex flexDirection={'column'}>
                <Box
                    borderRadius="2px"
                    height="60px"
                    backgroundColor={theme.palette[palette]}
                    width="180px"
                    {...props}
                />
                <Box padding="minor-2" lineHeight="1">
                    <Box fontSize="150" marginBottom="minor-1">
                        {palette}
                    </Box>
                    <br />
                    <Box color="text100" fontSize="100">
                        {theme.palette[palette]}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default withTheme(PaletteColor);
