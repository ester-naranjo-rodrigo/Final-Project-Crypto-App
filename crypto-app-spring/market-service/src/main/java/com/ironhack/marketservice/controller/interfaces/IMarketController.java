package com.ironhack.marketservice.controller.interfaces;

import java.io.*;

public interface IMarketController {
    String showHistorical(String coin) throws IOException;
    String showCurrentValues() throws IOException;
}
