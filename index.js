import axios from 'axios';
import crypto from 'crypto';
import url from 'url';
export class Gridnet {
	constructor(apiKey, callsign) {
		this.apiKey = apiKey;
		this.callsign =  (typeof callsign !== 'undefined') ?  callsign : "node gridnet";
	}
	async init() {
		const details = await this.networkDetails();
        this.networkID = details.network_id;
	}
	generateHash(data) {
		const shasum = crypto.createHash('sha1')
		shasum.update(this.apiKey + "" + data);
		return shasum.digest('hex');
	}
	async makeRequest(data) {
		const dataEncoded = Buffer.from(data, "utf8")
			.toString("base64url");
		return axios.post('https://gridnet.nexus-sl.net/api/index.php?', new url.URLSearchParams(
			{
				hash: this.generateHash(dataEncoded),
				api_key: this.apiKey,
				data: dataEncoded
			}))
	}
	async networkDetails() {
		return (await this.makeRequest(`{"action": "get_network_details"}`))
			.data;
	}
	//Create Zone
	async createZone(zoneName) {
		return (await this.makeRequest(`{"action":"create_zone","zone_name":"${zoneName}"}`))
			.data;
	}
	//Delete Zone
	async deleteZone(zoneID) {
		return (await this.makeRequest(`{"action":"delete_zone","zone_id":"${zoneID}"}`))
			.data;
	}
	//Zone ID to Name
	async zoneIDtoName(zoneID) {
		return (await this.makeRequest(`{"action":"zone_id_to_name","zone_id":"${zoneID}"}`))
			.data;
	}
	//Zone Name to ID
	async zoneNameToID(zoneName) {
		return (await this.makeRequest(`{"action":"zone_name_to_id","zone_name":"${zoneName}"}`))
			.data;
	}
	async zoneList() {
		return (await this.makeRequest(`{"action": "zone_list"}`))
			.data;
	}
	async zoneChannelList(zoneID) {
		return (await this.makeRequest(`{"action":"zone_channel_list","zone_id":"${zoneID}"}`))
			.data;
	}
	//Create Channel
	// TODO: Talk to Shay about missing channelname parameter? 
	async createChannel(zoneID, channelName) {
		return;
	}
	//Delete Channel
	async deleteChannel(zoneID, channelName) {
		return (await this.makeRequest(`{"action":"delete_channel","zone_id":"${zoneID}","channel_name":"${channelName}"}`))
			.data;
	}
	//Channel ID to Name
	async channelIDtoName(channelID) {
		return (await this.makeRequest(`{"action":"channel_id_to_name","channel_id":"${channelID}"}`))
			.data;
	}
	// Channel Name to ID
	async channelNameToID(zoneID, channelName) {
		return (await this.makeRequest(`{"action":"channel_name_to_id","zone_id":"${zoneID}","channel_name":"${channelName}"}`))
			.data;
	}

	//Transmit Message
	// TODO: Optional parameters full implementation. 
	async transmit(transmitLevel, message) {
		return (await this.makeRequest(`{"action":"transmit_message","transmit_level":"${transmitLevel}","message":"${message}","network_id":"${this.networkID}", "callsign":"${this.callsign}","use_discord": "TRUE"}`))
			.data;
	}
}