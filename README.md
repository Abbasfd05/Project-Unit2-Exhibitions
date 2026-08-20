# Project Unit 2 - Exhibitions
![alt text](image-1.png)

## Project Overview

**Exhibitions** is a full-stack CRUD web application built using the **MEN stack** (MongoDB, Express, Node.js) with **EJS** for server-rendered views. The app lets users create and manage a personal catalog of art exhibitions, where each exhibition holds an **embedded array of artworks** (title, artist, year, medium).

The project includes:

- Session-based user authentication (sign up, sign in, sign out)
- Full CRUD functionality for the Exhibition model
- Embedded artworks within each exhibition (no separate Artwork collection)
- Authorization so only the owner of an exhibition can edit or delete it
- A consistent, responsive navbar reflecting signed-in/signed-out state

## Getting Started

### Deployment

You can use the deployed app here:

[Exhibitions App](#) <!-- replace with your live deployment link -->

### How to Use

1. Sign up for a new account or sign in with an existing one.
2. From the navbar, click **My Exhibitions** to view your dashboard.
3. Click **Add New Exhibition** to create an exhibition and add artworks to it.
4. Click into any exhibition to view its full details, including all artworks.
5. Use the **Edit** and **Delete** options to manage exhibitions and artworks you own.

### Planning Materials

 
- [Wireframes](https://excalidraw.com/#json=hjQdV-yytMG25H-AQhTKQ,8RkAVsjaqXrKxUPMfnJFiw) <!-- replace with link to your Wireframes list/card on Trello -->
- [ERD](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Project2-GA.drawio&dark=0#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%22izzzNJ6dBGrzHcuUS7-O%22%3E7V1bc5s4GP01ntk%2BpMPVxo%2FxJW1mk00nSbuXlx0ZZJstRq4smri%2FfiUQd0HlBBwnleNpQUifQDo655M%2FAQNzunn8gMF2fY08GAwMzXscmLOBYThDg%2F7LEvZJgm06ScIK%2B16SpOcJd%2F4PyBM1nhr5HtyVMhKEAuJvy4kuCkPoklIawBg9lLMtUVCudQtWsJZw54Kgnvqn75E1vyxby9M%2FQn%2B1TmvWNX5kA9LMPGG3Bh56KCSZ84E5xQiRZGvzOIUBa7u0XZJyFw1HsxPDMCSCAp93EN8s%2FmNtYmgBWNBuiTPxs4N4A3xvBgjgyaPJwBgODJM2vEk3tfg7%2FBax05t4LF%2B2NzDPS0chnvlghcFmYE%2FDpOjnu%2Fkt2xpN6ffsDMXmtflfHy8nl%2FeXN3%2BwY7EVuFlAb5cXLGcpFz%2B%2Fvf%2Fz5vb3xrLiSm9uZ0mysEx2VFDo38v7%2BbWoZL3GSZ7G7cZNf%2BnRzX9pl1WO3hHshyu6EdFeCsEGNmbYgt3uAeFmCzsCSFS4oMFo1tiatbPMrBCfBM0nESAXEB%2BF1QwUPpCNbfaf%2BAQKXfbk2gEm%2Fo5UD%2F8R0f7AdGMPAW4su4GeH20ay26x7zZX7G8YOYgvLMdN7bIy6wQREHwSVcEbbhthdw12cNbcgGUgPrkNq5ci0QzZ0W8RCKn1ffkMczYwpi3MQXl56a%2Bq3BFGjMvyQqOEmTJym479pX59dfcxWODo%2Bvs%2F7qX9cKaPMtbM2JDTPlikfK3VaZEz5Y7s00wrjKItrZdgEO6SrBMUhR7TCp0RmueTS2qa71L4f4Xeh6TQjJ1wbOAT8DzWujRTcuWslu8QE%2FhYqJif7weINpDgPcMzl6RVlpSzNt3g15buFni8ldcTKipw%2ByVvS3oV57WDE4q6u7xBqDZt2SZvyAklFUy4GFtm0o0E%2BCHFQ9IkLgoCsN35Sbuzy3fXfuBdgT2KSGoo3Zss%2FUfo3SZazEpTWb6ixtLdJTXOK9OHfP8CbPyA%2BQz3GC4idw3Z5V7fUbB9gdgDIZWj6Tn2AQXBdEd78Yw2i7%2BMTx2jr5lWM%2FMg8FesK13azewCJhjuaG1XYEd4jjXZBOm5%2BEEwRQFiFxowXT%2FzAP76G0XqfDqfXlzEaDf1paEZ2rusOnGJsTnSZsn4MN34845fnTh%2F8qnmr%2FXbFxBEsNrp7SPHqY%2Bc4ghpGW6lcaNgIoIJ7a2hBsa0vapwoEeM2WioaZVup%2BnL%2BHMIbawLbqah20m5h9wn1R1OdNyMoenveS7ue5upb%2Fo8Bqq5omL4jOtM3ALOZpzdMqd5skbY%2F8HQFXAgFbEX7z%2F4mwCE1BsHXiVpguLZh6DfXA8unIWo38whHb6eECh1UHsYbe8BXkHCE7bID0ncyDZV7Alt9qlGO8OescFtT%2FR8n35ZdkyxEdKq6OBhNiAF3QNkwJsQlIpOAJepfcyhwLYXiBC04TtPQhMduo1g2pezHIAcOZiIBLsVTwKYbJmHCIJb5giEq5iZyn6BJhix1mjoCEesqVumbQl7%2FlmMk3SknnekXuw8vdCrRTZK8k6ol%2BJSX%2BMqKenQFEQ7eRnEE8q173kwbGDIFs7JdSSfrXQDH2fUDBduLO%2Btg62BgLBZE4HcaatiMDvPZ8BSML1WsDw2LNnMuSNEjq2SOHYL0NT4MQFqKHl9O%2FLqDPuSV1MSJimeFI%2F1wGPpzzBKXBOsWQqULw%2FK7KdnpbBi8NlKYd%2BOwurGuC%2BJHcqyma3YTEnskchrpED58qDMgrdKYsXgc5TEviGJHRl9SaxsLMFoxoliMyWxnZKXKRu5UKDsEZR8%2BdMvJ7BNy0CKK74aFoM0ZFFLQt7EkpBq77ZzWHGYqIUh3S8MWYKho2kisp6OTFu0MESLP0910zIfrOinpYuV04UhaQdyv204OuKyEFM2bmXWl%2B0dx%2BUvD0CuPK1D3A%2FXFDzk150IpADre7GIKRvNSlH20i6XyIV5ba5Yz%2FOAYac%2BVtXaMeYBstEsBcoeQZksf%2B9qbmqWBLNbiDrm8SEqG8o6EdG90OnfT%2FxqJbpl0e1tCYkpG98yTySU8Cb5TYluGWuy8S0Fyh5Bmd0XqHRXDD7Z%2BNaJ6K6a7B6uu%2F0tLDFlo17miQQY3iTHJbfqKtmNkWbJxrwUJHuEpNchJF%2BP5DZFvLJHDDSEu0THVazrTcS6Sl3bTlwq0NVvoEtfAB0aIobWtOH8%2FKKFj59EZaam112zYTl8nz1EiLtqY%2BeIgS5LNtBlKd%2F%2F1fj%2BKcD6DnSlhn8OHhVTeC2%2FuaWrJTtyrSrWjuH8ywa6FChfaaCrY4ge%2Fwc3SzbQdSKiqwJdh4tub4EuSzbQZamYghLdYzGabKBLgbJHUPJHUCrVFUNPNsx1IqqrprqHq25%2FYS5LNsxlqZhCfwyXPu1VyW6MNVs20KVA2SMo40c7K9EVI1T2CXUnIrpqqvsE0e3tjmpbNjphN6NH8Zua63ZLabJRDwXKHkHJX5mgZFcMPekgyGnIrprrVmBkCp6cXpHd7Onq3cuubHwihZliuNOa6wrQ8wxKk7B2DEqTjXsoUPYIyuQdPF1hsjPVbTF%2BTIhKR0FOQ3XVZLcCo9Rjb1Nd%2B%2FDVeZLokY1P2M0LPhXBveBkV4CeZ1CahLVjUJps2EOBskdQJu%2FF6wqTnalui%2FFe76Xg77iMK6rcSgFLTw47GxjDFeuHbAl%2B%2Bjg88R0WboS%2FQ493Zay25%2BzlrDRhfrsBoXcTwooM6wyJMPTyfD8gRvfoGoT75EgxY9t9COL7CuogLy5uL%2BCGmY%2BbaALcr%2BzFf6HXIPrOxcV8as2SmgzA%2FqzZu%2BcOk0NvmICPPvmLjX2q%2Fsne3%2FyqKM%2FgfeEQ2%2F27pOri2yyKqGjlNEdwlwX0ai%2FYlb3tAkXYhS0ZBXfNKpydOM7i64JeCXUk9Wvbvfo6H2MYAOJ%2FL%2BOrn9drKmb8VRHbDTPaR2VGwSNnFc5eAGfW2CkgTXs%2FNp2D%2BJGVnD0Wd%2FaFnU%2F0%2FCjFxfcapkh9Bknyop%2FYDwu5F2uMq68RtdMHmaVGEjjycjnZSpiqPXoykYKaqZ97tAIqp0kYIVK0gMF2fY08Rurz%2FwE%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E) <!-- replace with link to your ERD card on Trello -->

## Technologies Used

- Node.js
- Express.js
- MongoDB / Mongoose
- EJS
- express-session / connect-mongo
- bcrypt
- method-override
- CSS (Flexbox/Grid)

## Data Modeling Concepts Used

- Referenced relationship: `Exhibition.owner` → `User` (`ObjectId`, `ref: 'User'`)
- Embedded relationship: `Exhibition.artworks` → array of artwork subdocuments (chosen over referencing, since artworks never need to exist independently of their exhibition)

## Features

- User authentication with hashed passwords
- Full CRUD for exhibitions
- Embedded artwork management within each exhibition
- Route-level and view-level authorization
- Responsive navbar with conditional links

## Attributions

<!-- Remove this section if you don't end up using any external resources requiring credit -->

## Future Enhancements

Planned features beyond MVP include a community page to browse other users' exhibitions, search/filter by artist or medium, image uploads for artworks, and pagination for larger collections.

## Submission

This project will be submitted online on 8/27/2026.# Project-Unit2-Exhibtions
