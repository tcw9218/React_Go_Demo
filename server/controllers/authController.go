package controllers

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func Register(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

func Login() {

}
