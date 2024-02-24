#include<stdio.h>
#include<signal.h>
#include<unistd.h>
#include<stdlib.h>

static int waiting=2;

void ouch(int sig){
	waiting=0;
}

int main(){
	struct sigaction sa;

	sigemptyset(&sa.sa_mask);
	sa.sa_flags=0;
	sa.sa_handler=ouch;
	if(sigaction(SIGALRM,&sa,NULL)==-1){
		perror("sigaction");
		exit(0);
	}
	alarm(5);
	while(waiting!=0){
		printf("HELLO WORLD\n");
		sleep(1);
	}
}
