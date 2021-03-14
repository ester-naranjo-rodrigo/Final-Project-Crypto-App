package com.ironhack.marketservice.service.impl;

import com.ironhack.marketservice.service.interfaces.*;
import org.apache.http.*;
import org.apache.http.client.*;
import org.apache.http.client.methods.*;
import org.apache.http.impl.client.*;
import org.apache.http.util.*;
import org.springframework.stereotype.*;

import java.io.*;

@Service
public class MarketService implements IMarketService {

    public String showHistorical(String coin) throws IOException {
        String url = "https://financialmodelingprep.com/api/v3/historical-price-full/"+coin+"?apikey=f958608d6b865b1777506da96542072d";

        HttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);
        HttpResponse response = client.execute(request);
        HttpEntity entity = response.getEntity();
        String response_content = EntityUtils.toString(entity);
        return response_content;
    }

    public String showCurrentValues() throws IOException {
        String url = "https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=f958608d6b865b1777506da96542072d";

        HttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);
        HttpResponse response = client.execute(request);
        HttpEntity entity = response.getEntity();
        String response_content = EntityUtils.toString(entity);
        return response_content;
    }
}
