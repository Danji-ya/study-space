#include<stdio.h>
#include<algorithm>
#define ll long long
using namespace std;

typedef struct {
	ll red;
	ll green;
	ll blue;
}rgb;

rgb cost[1001];
rgb f[1001];


int main() {
	int n;
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		scanf("%d %d %d", &cost[i].red, &cost[i].green, &cost[i].blue);
		f[i].red = min(f[i - 1].blue, f[i - 1].green) + cost[i].red;
		f[i].green = min(f[i - 1].blue, f[i - 1].red) + cost[i].green;
		f[i].blue = min(f[i - 1].red, f[i - 1].green) + cost[i].blue;
	}
	printf("%lld\n", min(f[n].red, min(f[n].blue, f[n].green)));
}
