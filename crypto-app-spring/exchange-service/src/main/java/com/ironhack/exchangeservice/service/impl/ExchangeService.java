package com.ironhack.exchangeservice.service.impl;

import com.ironhack.exchangeservice.service.interfaces.*;
import org.apache.http.*;
import org.apache.http.client.*;
import org.apache.http.client.methods.*;
import org.apache.http.impl.client.*;
import org.apache.http.util.*;
import org.springframework.stereotype.*;

import java.io.*;

@Service
public class ExchangeService implements IExchangeService {

    public String showExchange() throws IOException {
        String url = "https://financialmodelingprep.com/api/v3/quotes/forex?apikey=f958608d6b865b1777506da96542072d";

        HttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);
        HttpResponse response = client.execute(request);
        HttpEntity entity = response.getEntity();
        String response_content = EntityUtils.toString(entity);
        return response_content;
    }
}
