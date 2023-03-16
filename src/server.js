import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        id: "inv-2022-010",
        totalAmount: 4800,
        totalTax: 0,
        discount: 0,
        subTotal: 4800,
        issuedDate: "2022-01-11",
        dueDate: "2022-01-18",
        billedTo: {
          name: "zaky grizzly",
          company: "Monlight Agency LTD",
          state: "New York",
          country: "USA",
        },
        seller: {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
          companyLogo: "assets/images/dipa.png",
          address: {
            street: "Ijen Boulevard Street 101",
            city: "Malang City",
            zip: "65115",
            state: "East Java",
            country: "Indonesia",
          },
        },
        payment: {
          type: "wire transfer",
          accounttName: "Barly Vallendito",
          accountNumber: "9700 0023 4300 2900",
          routingNo: "084009519",
        },
        items: [
          {
            id: "1",
            tax: 0,
            rate: 40,
            hours: 120,
            lineTotal: 4800,
            description: "",
            name: "Payment Project - Monlight Mobile Design",
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/invoice", (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
