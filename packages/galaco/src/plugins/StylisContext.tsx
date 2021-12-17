/**
 * @file [StylisContextProvider]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-12-17 11:11:38
 */
import React from 'react';

export const StylisContext = React.createContext<any>(undefined);
export const StylisConsumer = StylisContext.Consumer;
export const StylisContextProvider = StylisContext.Provider;
