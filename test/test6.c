#include<stdio.h>
#include<stdlib.h>
#include<string.h>


void parse_command(char *arr[]){
	int i=0;
	int count=0;
	while(arr[i]!=NULL){
		if(strncmp(arr[i],"for",strlen("for"))==0){
			count++;
		}
		i++;
	}
	printf("for's count =%d\n",count);
}



int main(){

	char *arr[10]={"for","5","for","5","for","5"};


	parse_command(arr);


}
