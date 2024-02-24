#include<stdio.h>
#include<stdlib.h>
#include<wait.h>
#include<unistd.h>


int count=1;



int main(){
	printf("for <N> \n");
	scanf("%d",&count);
	pid_t pid;
	int status;

	for(int i=0;i<count;i++){
		pid=fork();
	}

	if(pid==0){
	
		pid=fork();

		if(pid==0){
			printf("I'm child's child PID=%d\n",getpid());
			printf("while 3\n");
			for(int i=0;i<3;i++){
				printf("%d\n",i);
				sleep(1);
			}
		}
		else if(pid==-1){
			printf("FORK ERROR\n");
		}
		else{
			printf("I'm child  PID=%d\n",getpid());
			
			waitpid(pid,&status,0);//자식이 종료될때 까지 기다

			if(WIFEXITED(status)){
				printf("pid=%d child process terminated!\n",pid);
				alarm(0);//정상종료시 타임아웃 작동 취소
			}
			else if(WIFSIGNALED(status)){
				printf("pid=%d signal에 의해서 종료\n",pid);
			}
		}


	}
	else if(pid==-1){
		printf("FORK ERROR\n");
	}
	else{
		printf("I'm parent   PID=%d\n",getpid());
		waitpid(pid,&status,0);//자식이 종료될때 까지 기다

		
		if(WIFEXITED(status)){
			printf("pid=%d child process terminated!\n",pid);
			alarm(0);//정상종료시 타임아웃 작동 취소
		}
		else if(WIFSIGNALED(status)){
			printf("pid=%d signal에 의해서 종료\n",pid);
		}
	}
}
		
