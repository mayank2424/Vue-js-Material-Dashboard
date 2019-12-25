<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
    
      <v-flex md12 sm12 lg12>
        <v-card class="dash_card">
          <v-toolbar
            id="core-toolbar"
            style="background: #fff;box-shadow:none !important;border-bottom:1px solid #e2e2e2"
          >
            <div class="v-toolbar-title">
              <v-toolbar-title
                style="font-size:1.25rem !important"
                class="tertiary--text font-weight-normal"
              >
                {{ activeDashboardTab.title }}
              </v-toolbar-title>
            </div>
            <v-spacer />
            <v-toolbar-items>
              <v-flex align-center layout py-2>
                <Select
                  :items="visitor_month"
                  :label="selectedMonthinVisitors"
                  width="150px"
                  type="month"
                />
                <Select
                  :items="visitor_year"
                  :label="selectedYearinVisitors"
                  width="120px"
                  type="year"
                />
              </v-flex>
            </v-toolbar-items>
          </v-toolbar>
          <div style="padding:20px;background:white">
              <v-fade-transition mode="out-in">
                <column-chart
                v-if="activeDashboardTab.id == '0'"
                :dataset="{ maxBarThickness: 12 }"
                :stacked="true"
                :colors="['blue', 'blue']"
                :data="
                    getDashBoardData.visitors[selectedMonthinVisitors][
                    selectedYearinVisitors
                    ]
                "
                ></column-chart>
            <line-chart
              v-if="activeDashboardTab.id == '1'"
              :data="
                getDashBoardData.performanceData[selectedMonthinVisitors][
                  selectedYearinVisitors
                ]
              "
            ></line-chart>
            <area-chart
              v-if="activeDashboardTab.id == '2'"
              :data="
                getDashBoardData.overallData[selectedMonthinVisitors][
                  selectedYearinVisitors
                ]
              "
            ></area-chart>
            </v-fade-transition>
          </div>
        </v-card>
      </v-flex>  

      <v-flex md6 sm6 lg3 v-for="card in statsCards.data" :key="card.title">
        <v-card class="stats_card dash_card">
          <h3 class="stats_title">{{ card.title }}</h3>
          <h1 class="stats_value">{{ card.value }}</h1>
          <div class="stats_div">
            <p :style="{ color: card.growthColor }" class="stats_growth">
              {{ card.growth }}
            </p>
            <v-icon :style="{ color: card.growthColor }">{{
              card.icon
            }}</v-icon>
          </div>
          <area-chart
            height="130px"
            margin-top="-30px"
            :colors="card.color"
            :library="{
              scales: {
                xAxes: [{ display: false }],
                yAxes: [{ display: false }]
              }
            }"
            :data="card.chartData"
          ></area-chart>
        </v-card>
      </v-flex>

      <v-flex md12 lg8>
        <v-card class="dash_card">
          <div class="table_header">
            <h2>Most Visited Pages</h2>
          </div>
          <v-divider />
          <div>
            <v-data-table
              :headers="headers"
              rounded
              :items="items"
              hide-actions
            >
              <template slot="headerCell" slot-scope="{ header }">
                <span
                  class="table_row_header text-xs-left text-warning text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template slot="items" slot-scope="{ index, item }">
                <td class="table_data_td">
                  {{ item.name }}
                  <v-icon class="table_icon">mdi-open-in-new</v-icon>
                </td>
                <td class="text-xs-left table_data_td">{{ item.visitors }}</td>
                <td class="text-xs-left table_data_td">
                  {{ item.page_visits }}
                </td>
                <td class="text-xs-left table_data_td graph_td">
                  {{ item.bounce }}
                  <area-chart
                    width="100px"
                    height="45px"
                    :colors="['#0f65db', '#e8effa']"
                    :library="{
                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }]
                      }
                    }"
                    :data="item.chartData"
                  ></area-chart>
                </td>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-flex>

      <v-flex md12 lg4>
        <v-card class="dash_card">
          <div class="table_header">
            <h2>Social Media Traffic</h2>
          </div>
          <v-divider />
          <div>
            <v-data-table
              :headers="traffic_table_headers"
              rounded
              :items="traffic_table_items"
              hide-actions
            >
              <template slot="headerCell" slot-scope="{ header }">
                <span
                  class="table_row_header text-xs-left text-warning text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template slot="items" slot-scope="{ index, item }">
                <td class="table_data_td">
                  {{ item.name }}
                </td>
                <td class="text-xs-left table_data_td graph_td">
                  {{ item.visitors }}
                </td>
                <td class="prog_class">
                  <v-progress-linear
                    color="indigo"
                    class="progress_bar"
                    rounded
                    :value="item.progress_value"
                  ></v-progress-linear>
                </td>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//chart js
import { Bar, Line } from "vue-chartjs";

//select component
import Select from "../components/helper/Select";
export default {
  components: {
    Select
  },
  data() {
    return {
      statsCards: {
        data: [
          {
            title: "Realtime users",
            value: "56",
            growth: "-9.8%",
            growthColor: "red",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            },
            color: ["#51ac42", "#ebf6ec"],
            icon: "mdi-arrow-down-bold-box-outline"
          },
          {
            title: "Total visits",
            value: "54,598",
            growth: "+11.8%",
            growthColor: "green",
            chartData: {
              "2017-01-01 00:00:00 -0800": 4,
              "2017-01-01 00:01:00 -0800": 6,
              "2017-01-01 00:02:00 -0800": 5,
              "2017-01-01 00:03:00 -0800": 5.5,
              "2017-01-01 00:04:00 -0800": 3.5,
              "2017-01-01 00:05:00 -0800": 6.5
            },
            color: ["#6a67f3", "#f0effe"],
            icon: "mdi-arrow-up-bold-box-outline"
          },
          {
            title: "Bounce Rate",
            value: "73.67",
            growth: "+18.8%",
            growthColor: "green",
            chartData: {
              "2017-01-01 00:00:00 -0800": 4,
              "2017-01-01 00:01:00 -0800": 6,
              "2017-01-01 00:02:00 -0800": 5,
              "2017-01-01 00:03:00 -0800": 5.5,
              "2017-01-01 00:04:00 -0800": 3.5,
              "2017-01-01 00:05:00 -0800": 6.5
            },
            color: ["#f9d156", "#fefaef"],
            icon: "mdi-arrow-up-bold-box-outline"
          },
          {
            title: "Visit duration",
            value: "1m 10s",
            growth: "-19.8%",
            growthColor: "red",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            },
            color: ["#0f65db", "#e8effa"],
            icon: "mdi-arrow-down-bold-box-outline"
          }
        ]
      },
      tableData: {
        visitedPagesData: [
          {
            name: "/store/",
            visitors: "4,800",
            page_visits: "3980",
            bounce: "80.12%"
          },
          {
            name: "/store/symbold",
            visitors: "3,800",
            page_visits: "3180",
            bounce: "60.12%",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            }
          },
          {
            name: "/store/dashboard-ui-kit",
            visitors: "2,800",
            page_visits: "2180",
            bounce: "50.12%",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            }
          },
          {
            name: "/store/webflow",
            visitors: "2,200",
            page_visits: "1980",
            bounce: "38.12%",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            }
          },
          {
            name: "/store/webflow-2",
            visitors: "2000",
            page_visits: "1680",
            bounce: "30.12%",
            chartData: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-01 00:01:00 -0800": 5,
              "2017-01-01 00:02:00 -0800": 4,
              "2017-01-01 00:03:00 -0800": 3.5,
              "2017-01-01 00:04:00 -0800": 3.8,
              "2017-01-01 00:05:00 -0800": 1
            }
          }
        ]
      },
      visitor_year: ["2001", "2004", "2008", "2010", "2016"],
      visitor_month: ["December", "January", "February", "March", "April"],
      headers: [
        {
          sortable: false,
          text: "Page Name",
          value: "id"
        },
        {
          sortable: false,
          text: "Visitors",
          value: "name"
        },
        {
          sortable: false,
          text: "Unique Page ",
          value: "salary",
          align: "right"
        },
        {
          sortable: false,
          text: "Bounce Rate",
          value: "Bounce Rate"
        }
      ],
      items: [
        {
          name: "/store/",
          visitors: "4,800",
          page_visits: "3980",
          bounce: "80.12%",
          chartData: {
            "2017-01-01 00:00:00 -0800": 3,
            "2017-01-01 00:01:00 -0800": 5,
            "2017-01-01 00:02:00 -0800": 4,
            "2017-01-01 00:03:00 -0800": 3.5,
            "2017-01-01 00:04:00 -0800": 3.8,
            "2017-01-01 00:05:00 -0800": 1
          }
        },
        {
          name: "/store/symbold",
          visitors: "3,800",
          page_visits: "3180",
          bounce: "60.12%",
          chartData: {
            "2017-01-01 00:00:00 -0800": 3,
            "2017-01-01 00:01:00 -0800": 5,
            "2017-01-01 00:02:00 -0800": 4,
            "2017-01-01 00:03:00 -0800": 3.5,
            "2017-01-01 00:04:00 -0800": 3.8,
            "2017-01-01 00:05:00 -0800": 1
          }
        },
        {
          name: "/store/dashboard-ui-kit",
          visitors: "2,800",
          page_visits: "2180",
          bounce: "50.12%",
          chartData: {
            "2017-01-01 00:00:00 -0800": 3,
            "2017-01-01 00:01:00 -0800": 5,
            "2017-01-01 00:02:00 -0800": 4,
            "2017-01-01 00:03:00 -0800": 3.5,
            "2017-01-01 00:04:00 -0800": 3.8,
            "2017-01-01 00:05:00 -0800": 1
          }
        },
        {
          name: "/store/webflow",
          visitors: "2,200",
          page_visits: "1980",
          bounce: "38.12%",
          chartData: {
            "2017-01-01 00:00:00 -0800": 3,
            "2017-01-01 00:01:00 -0800": 5,
            "2017-01-01 00:02:00 -0800": 4,
            "2017-01-01 00:03:00 -0800": 3.5,
            "2017-01-01 00:04:00 -0800": 3.8,
            "2017-01-01 00:05:00 -0800": 1
          }
        },
        {
          name: "/store/webflow-2",
          visitors: "2000",
          page_visits: "1680",
          bounce: "30.12%",
          chartData: {
            "2017-01-01 00:00:00 -0800": 3,
            "2017-01-01 00:01:00 -0800": 5,
            "2017-01-01 00:02:00 -0800": 4,
            "2017-01-01 00:03:00 -0800": 3.5,
            "2017-01-01 00:04:00 -0800": 3.8,
            "2017-01-01 00:05:00 -0800": 1
          }
        }
      ],
      traffic_table_headers: [
        {
          sortable: false,
          text: "Network"
        },
        {
          sortable: false,
          text: "Visitors"
        },
        {
          sortable: false,
          text: ""
        }
      ],
      traffic_table_items: [
        {
          name: "Facebook",
          visitors: "3,800",
          progress_value: "70"
        },
        {
          name: "Instagram",
          visitors: "2,800",
          progress_value: "50"
        },
        {
          name: "Twitter",
          visitors: "2,000",
          progress_value: "40"
        },
        {
          name: "Linkedin",
          visitors: "1,800",
          progress_value: "28"
        },
        {
          name: "Reddit",
          visitors: "100",
          progress_value: "15"
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    }
  },
  created() {
    console.log("Mounted");
    console.log(this.activeDashboardTab);
    console.log(this.getDashBoardData);
  },
  computed: {
    ...mapGetters([
      "selectedMonthinVisitors",
      "selectedYearinVisitors",
      "getDashBoardData",
      "activeDashboardTab"
    ])
  }
};
</script>

<style>
.select_tag {
  max-width: 140px;
  margin: 0 10px !important;
}
.chart_container {
  box-shadow: 0 1px 4px 0 rgba(32, 33, 36, 0.28) !important;
  border-radius: 5px;
  /* padding: 0 !important; */
}
.stats_div {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.dash_card {
     border-radius: 5px !important;
  border: 1px solid #e4e4e4 !important;
    box-shadow: 0 1px 1px -5px rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
}
.stats_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  /* box-shadow: none !important; */
}
.stats_title {
  color: #92989b;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  text-transform: uppercase;
}
.stats_value {
  font-size: 2.5rem !important;
  margin: 0;
  color: #424141;
  font-weight: 500 !important;
}
.stats_growth {
  margin-bottom: -20px;
  margin-right: 8px;
  line-height: 25px;
}

.tableClass {
  width: 100%;
}
.table_header {
  padding: 20px;
  color: #3c3d41;
}
.table_header h2 {
  font-weight: 500 !important;
  font-size: 1.3rem;
}
.table_row_header {
  text-transform: uppercase;
  text-align: center;
  color: #a6a8ad !important;
}
.table_data_td {
  color: #414348 !important;
}
.table_icon {
  float: right;
  font-size: 22px;
  color: #a0a0a8;
}
.graph_td {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px !important;
  padding-bottom: 35px !important;
}
.progress_bar {
  height: 5px !important;
  border-radius: 10px !important;
  width: 80px;
}
.prog_class {
  padding-left: 0 !important;
}
</style>
