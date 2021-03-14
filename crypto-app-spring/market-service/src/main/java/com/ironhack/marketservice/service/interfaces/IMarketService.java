package com.ironhack.marketservice.service.interfaces;

import java.io.*;

public interface IMarketService {
    String showHistorical(String coin) throws IOException;
    String showCurrentValues() throws IOException;
}
