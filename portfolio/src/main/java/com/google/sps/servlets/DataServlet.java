// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList; // import ArrayList class
import com.google.gson.*; // import GSON class

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // response.setContentType("text/html;");
    // response.getWriter().println("Hello, Alicia!");

    ArrayList<String> myComments = new ArrayList<String>(); 

    myComments.add("Hello, World!");
    myComments.add("Good night!");
    myComments.add("What is the weather today?");
    
    String jsonString = convertToJsonUsingGson(myComments); 

    // response must be last or error message
    response.setContentType("text/html;");
    response.getWriter().println(jsonString); 
  }

  // convert arraylist to JsonUsingGson 
  // ***not too sure how to import the class so I copied and pasted the function
  private String convertToJsonUsingGson(ArrayList<String> myComments) {
    Gson gson = new Gson();
    String json = gson.toJson(myComments);
    return json;
  }
}
