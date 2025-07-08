export type TInputTypes =
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'month'
	| 'number'
	| 'password'
	| 'range'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

export type IRestaurant = {
	Id: number;
	Name: string;
	PhoneNumber: string;
	Rate: string;
	User: string;
	Street: string;
	District: string;
	City: string;
	TotalCount: number; // silinecek
};

export type LoginUserInput = {
	email: string;
	password: string;
};

export type AuthTokenResponse = {
	Claims: string[];
	Expiration: string;
	RefreshToken: string;
	Token: string;
};

export type AuthResponse = {
	Data: AuthTokenResponse;
	Message: string;
	Success: boolean;
};
export type RegisterUserInput = {
	name: string;
	email: string;
	password: string;
};

export type ClaimsResponse = {
	Id: string;
	ParentId: string;
	Label: string;
	IsDisabled: boolean;
};

export type DecodedToken = {
	userId: string;
	email: string;
	role: string;
	username: string;
};

export type GetRestaurantsParams = {
	Page: number;
	Take: number;
	search?: string;
	filters?: Record<string, any>;
	sortBy?: string;
	sortOrder?: string;
};

export type Restaurant = {
	Id: number;
	Name: string;
	PhoneNumber: string;
	Rate: number;
	User: string;
	Street: string;
	District: string;
	City: string;
	TotalCount: number; // silinicek sonradan
};

export type GetRestaurantsResponse = {
	Data: Restaurant[];
	TotalCount: number;
};
