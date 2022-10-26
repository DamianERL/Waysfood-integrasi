package main

import (
	"fmt"
	"net/http"
	"os"
	"waysfood/database"
	"waysfood/pkg/mysql"
	"waysfood/routes"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	//initialDB
	mysql.DataBaseinit()
	//run migration
	database.RunMigration()

	r := mux.NewRouter()

	//path for spesific request handler
	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())

	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	var port = os.Getenv("PORT")
	fmt.Println("server running localhost:" + port)
	http.ListenAndServe("localhost:"+port, r)
}
